import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets.js";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef(null);
    const seekBg = useRef(null);
    const seekBar = useRef(null);

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [playlist, setPlaylist] = useState(null); // Neue Zustand-Variable für die Playlist
    const [time, setTime] = useState({
        currentTime: 0,
        totalTime: 0,
    });

    // Aktualisiert die Audioquelle, wenn sich der Track ändert
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = track.file;
            if (playStatus) {
                audioRef.current.play();
            }
        }
    }, [track]);

    // Event Listener für 'loadedmetadata', um die Gesamtdauer zu erhalten
    useEffect(() => {
        const audio = audioRef.current;

        const handleLoadedMetadata = () => {
            setTime((prevTime) => ({
                ...prevTime,
                totalTime: audio.duration,
            }));
        };

        if (audio) {
            audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        }

        return () => {
            if (audio) {
                audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            }
        };
    }, [track]);

    // Aktualisiert die aktuelle Zeit und den Fortschrittsbalken
    useEffect(() => {
        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            if (audio && audio.duration) {
                const progress = (audio.currentTime / audio.duration) * 100;
                if (seekBar.current) {
                    seekBar.current.style.width = `${progress}%`;
                }
                setTime((prevTime) => ({
                    ...prevTime,
                    currentTime: audio.currentTime,
                }));
            }
        };

        const handleSongEnd = () => {
            if (playlist) {
                // Wenn eine Playlist aktiv ist, spiele den nächsten Song ab
                const currentIndex = playlist.findIndex((song) => song.id === track.id);
                const nextIndex = currentIndex + 1;
                if (nextIndex < playlist.length) {
                    setTrack(playlist[nextIndex]);
                } else {
                    // Playlist zu Ende
                    setPlayStatus(false);
                }
            } else {
                // Kein Playlist-Modus, zufälligen Song abspielen
                const randomIndex = Math.floor(Math.random() * songsData.length);
                setTrack(songsData[randomIndex]);
            }
        };

        if (audio) {
            audio.addEventListener("timeupdate", handleTimeUpdate);
            audio.addEventListener("ended", handleSongEnd);
        }

        return () => {
            if (audio) {
                audio.removeEventListener("timeupdate", handleTimeUpdate);
                audio.removeEventListener("ended", handleSongEnd);
            }
        };
    }, [track, playlist]);

    // Funktion zum Abspielen
    const play = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
        }
    };

    // Funktion zum Pausieren
    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayStatus(false);
        }
    };

    // Spielt einen Track basierend auf der ID ab, optional mit Playlist
    const playWithId = (id, playlist = null) => {
        const newTrack = songsData.find((song) => song.id === id);
        if (newTrack) {
            setTrack(newTrack);
            setPlayStatus(true);
            if (playlist) {
                setPlaylist(playlist);
            } else {
                setPlaylist(null);
            }
        }
    };

    // Vorheriger Track
    const previous = () => {
        if (playlist) {
            const currentIndex = playlist.findIndex((song) => song.id === track.id);
            const prevIndex = currentIndex - 1;
            if (prevIndex >= 0) {
                setTrack(playlist[prevIndex]);
                setPlayStatus(true);
            }
        } else {
            // Kein Playlist-Modus, zufälligen Song abspielen
            const randomIndex = Math.floor(Math.random() * songsData.length);
            setTrack(songsData[randomIndex]);
            setPlayStatus(true);
        }
    };

    // Nächster Track
    const next = () => {
        if (playlist) {
            const currentIndex = playlist.findIndex((song) => song.id === track.id);
            const nextIndex = currentIndex + 1;
            if (nextIndex < playlist.length) {
                setTrack(playlist[nextIndex]);
                setPlayStatus(true);
            }
        } else {
            // Kein Playlist-Modus, zufälligen Song abspielen
            const randomIndex = Math.floor(Math.random() * songsData.length);
            setTrack(songsData[randomIndex]);
            setPlayStatus(true);
        }
    };

    // Song vor- oder zurückspulen
    const seekSong = (e) => {
        if (audioRef.current && seekBg.current) {
            const clickPosition = e.nativeEvent.offsetX;
            const totalWidth = seekBg.current.offsetWidth;
            const duration = audioRef.current.duration;

            audioRef.current.currentTime = (clickPosition / totalWidth) * duration;
        }
    };

    // Zeitformatierung
    const formatTime = (timeInSeconds) => {
        if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
        const minutes = Math.floor(timeInSeconds / 60) || 0;
        const seconds = Math.floor(timeInSeconds % 60) || 0;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
        formatTime,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
            {/* Audio-Element */}
            <audio ref={audioRef} preload="metadata" />
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;

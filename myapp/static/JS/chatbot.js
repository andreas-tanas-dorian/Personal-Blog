document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");

    const topics = {
        "midas": {
            question: "Are you interested in the Midas M32 or HD96?",
            responses: {
                "m32": {
                    followUp: "Would you like to know about the M32's workflow, routing, live use, or stage box compatibility?",
                    subResponses: {
                        "workflow": "The Midas M32 workflow is designed around a layered control surface and streamlined navigation, with 8 fader banks (channels, buses, DCAs) accessible via bank-select buttons, and a central 7-inch screen controlled by an adjacent rotary encoder and buttons for navigating menus like EQ, dynamics, routing, and FX. Channel processing is typically done using the “select” button on each strip, which brings that channel’s parameters to the top panel for focused editing. Routing and patching are menu-driven, while scenes and snippets automate full or partial console states. The “Sends on Faders” mode allows intuitive bus mixing by flipping the fader layer to control aux or monitor mixes. Overall, the M32 emphasizes tactile control and efficient access to core functions without menu diving, making it fast and familiar for live mixing.",
                        "routing": "Routing on the Midas M32 is flexible and modular, using a matrix-style system divided into input sources, output destinations, and internal buses. The “Routing” menu on the top screen gives access to tabs for assigning physical inputs (local, AES50, card, or expansion) to console input channels in blocks of 8. Similarly, outputs can be routed from buses, direct outs, or other signals to physical outputs like XLR outs, AES50, or USB card channels. The console supports virtual patching, allowing you to reassign signal flow without physically repatching cables, and lets you define custom input/output configurations for FOH, monitors, recording, or broadcast setups. Direct outs can be tapped at multiple signal points (pre-EQ, post-fade, etc.), and you can mirror or split signals easily between stageboxes or cards.",
                        "live": "The Midas M32 is designed with live sound in mind, offering professional-grade features for both front-of-house and monitor mixing. It boasts 40 input channels, 16 mix buses, and 8 DCA groups, providing ample flexibility for complex live sound setups. The M32’s 96 kHz processing engine delivers pristine audio quality with ultra-low latency, and its extensive EQ and dynamics processing on each channel, including the signature Midas preamps, ensures optimal sound control. The console’s user-friendly interface, with its color-coded displays and tactile controls, enhances fast workflow under pressure, and its “Sends on Faders” mode allows intuitive control of monitor mixes. It supports multiple stageboxes (e.g., DL16), AES50 connectivity for digital snake systems, and expansion cards for Dante or MADI, making it ideal for large-scale events and versatile touring setups.",
                        "stage": "The Midas M32 is compatible with several AES50-based stageboxes, including the Midas DL16, DL32, and other Midas and Klark Teknik devices, providing up to 96 channels of audio over a single CAT5/6 cable. The DL16 offers 16 inputs and 8 outputs, while the DL32 provides 32 inputs and 16 outputs, both with dual-redundant AES50 ports for fail-safe operation. The console also supports the Klark Teknik DN9630 and DN9650 for integrating other digital formats like Dante and MADI. These stageboxes connect seamlessly to the M32 via the AES50 ports, offering flexible I/O configurations for live sound applications, with easy patching and routing through the M32’s menu system. Additionally, the M32’s USB interface allows for multi-track recording, further extending its capabilities for live production."
                    }
                },
                "hd96": {
                    followUp: "Do you want to explore the HD96's scene system, dual touchscreens, processing power, or stage integration?",
                    subResponses: {
                        "scene": "The Midas HD96-24’s scene system is a powerful automation tool that allows you to capture and recall the full state of the console—including channel settings, routing, effects, and mix parameters—within individual scenes, all stored inside a show file. It supports customizable recall scopes, meaning you can choose which parameters to include or exclude during scene changes. Scenes can be organized into playlists for sequential recall during live events, with support for crossfade transitions between scenes. The console also offers scene editing and previewing without disrupting the current mix, and integrates with mCloud for cloud-based storage of user profiles and shows.",
                        "touchscreen": "The Midas HD96-24 features a central 21-inch full HD multi-touch touchscreen that serves as the main control surface, offering intuitive access to all console functions through a modern GUI. It supports multi-touch gestures like pinch-to-zoom and drag-and-drop, and the UI is context-sensitive, adapting to selected channels or functions. The screen is flanked by assignable encoders and buttons for tactile control, allowing fast parameter adjustments without leaving the screen. Additionally, there are three more 7-inch touchscreens above each bay of 12 faders, providing dedicated channel strip views, metering, and quick access to processing sections for hands-on workflow in live environments.",
                        "processing": "The Midas HD96-24 is powered by a 96 kHz, 64-bit floating-point processing engine, delivering ultra-low latency and high headroom for pristine audio quality. It features 144 input processing channels, 120 time-aligned aux and subgroup buses, and up to 96 FX slots running high-end internal plugins with no need for external DSP. The console uses an advanced FPGA and DSP hybrid architecture, allowing parallel processing and dynamic resource allocation, which ensures stable performance even with heavy routing and effects loads. Its automation and processing core is designed to handle complex live productions without compromising sound integrity or system responsiveness.Its 96kHz engine and Neutron DSP architecture enable complex FX chains with zero-latency monitoring.",
                        "stage": "The Midas HD96-24 supports a wide range of AES50-based stageboxes, including the DL16, DL153, DL154, DL155, DL231, DL251, DL252, and Klark Teknik’s DN9650, offering up to 96 bidirectional channels per port at 96 kHz with ultra-low latency and phase coherence via SuperMAC. These stageboxes allow for flexible I/O configurations, with models like the DL231 supporting dual-redundant mic preamps and gain tracking for sharing between consoles. The HD96 enables both redundant and non-redundant stagebox setups, suitable for FOH–monitor splits or complex routing scenarios. The DN9650 further expands compatibility by bridging the console to Dante, MADI, and other formats through optional expansion cards. All stagebox inputs and outputs are managed through the HD96’s powerful patching matrix, allowing for full customization of routing and system design in real time."
                    }
                }
            }
        },
        "pa": {
            question: "Are you looking for active or passive PA systems?",
            responses: {
                "active": "Active PA systems are complete, self-contained audio setups where the amplifier is built into the speaker cabinet, eliminating the need for separate power amplifiers and external processing. These systems typically include integrated components like amplifiers, equalizers, and sometimes digital signal processors (DSP), making them easier to set up and transport. Active speakers are designed to optimize performance by matching the internal amplifier’s power to the specific speaker’s requirements, offering better efficiency and sound quality. They often feature balanced XLR inputs and outputs for signal routing, and many come with built-in wireless receiver compatibility, EQ controls, and other features that make them ideal for live sound, DJs, and portable events. Popular brands include QSC, JBL, and Yamaha.",
                "passive": "Passive PA systems consist of separate components: passive speakers, an external power amplifier, and a mixing console. The speakers do not have built-in amplification, so an external amp is required to drive them. This type of system offers more flexibility in choosing individual components, allowing for tailored performance depending on the size of the venue or the specific sound requirements. The amplifier must match the speaker’s power rating to avoid damage or underperformance. Passive systems often require more setup time and cabling but can be more cost-effective and scalable, making them ideal for larger venues or events where high power and custom setups are needed. Popular brands for passive speakers include Electro-Voice, Peavey, and Mackie."
            }
        },
        "iem": {
            question: "Are you asking about IEMs for live performance or studio monitoring?",
            responses: {
                "live": "Custom in-ear monitors (IEMs) for live use are molded specifically to the shape of an individual’s ears, providing a perfect, personalized fit that enhances comfort, noise isolation, and sound quality. This custom fit reduces sound leakage and provides superior isolation from ambient noise, which is especially beneficial in loud live environments. Custom IEMs typically offer better sound clarity and consistency compared to universal models, as they are designed to optimize frequency response for the wearer. They can also be tailored with specific driver configurations (e.g., balanced armature, dynamic drivers, or hybrids) to achieve the desired sound signature, from more detailed high-end to punchy low-end response. These IEMs are commonly used by musicians and audio professionals for monitoring live performances, ensuring that they hear precise mixes without interference from external noise. Popular brands offering custom IEMs include Ultimate Ears, Westone, and JH Audio, and they often include detachable cables for durability and ease of replacement.",
                "studio": "Studio in-ear monitors (IEMs) are compact, earbud-style headphones designed for professional use in live performance or studio environments. They provide a direct, clear sound with minimal external noise leakage, offering accurate audio reproduction for mixing or monitoring. IEMs are typically used for personal monitoring on stage or in the studio, where isolation and comfort are crucial, as they fit snugly in the ear canal, preventing outside noise interference. In contrast, studio headphones are larger, over-ear or on-ear designs that cover the entire ear, offering more natural sound reproduction with a wider frequency range and greater soundstage. They tend to provide more detailed audio, especially in terms of low-end response, and are preferred for mixing, mastering, and critical listening in controlled studio environments. While IEMs offer portability, isolation, and comfort, studio headphones excel in delivering a fuller, more dynamic sound, making them ideal for tasks like detailed editing and mix evaluation where overall sound depth and fidelity are essential. Both tools serve different purposes: IEMs are more portable and isolating for live performances, while studio headphones offer greater comfort and depth for extended studio sessions."
            }
        },
        "shure": {
            question: "Are you referring to dynamic or condenser Shure microphones?",
            responses: {
                "dynamic": "Shure offers a variety of dynamic microphones suited for different live sound, recording, and broadcasting needs. The SM58 is a legendary vocal mic known for its durability, clarity, and isolation in live environments, while the SM57 is a versatile mic favored for instrument miking, especially drums and guitar amps. The BETA 58A builds on the SM58 with a supercardioid pattern for tighter pickup and better isolation, making it ideal for high-output vocal performances. The BETA 57A offers similar versatility to the SM57 but with enhanced feedback rejection, thanks to its supercardioid design. For entry-level users, the PG58 offers a more affordable dynamic mic for performers and public speakers, while the BETA 52A is specifically designed for kick drums and low-frequency instruments, delivering powerful bass response and minimal distortion. These microphones are known for their ruggedness, reliability, and excellent performance across a range of applications.",
                "condenser": "Shure offers a variety of condenser microphones known for their sensitivity and detailed sound capture, ideal for studio recording. The KSM32 is a cardioid-patterned large-diaphragm mic that delivers a smooth, natural sound with low self-noise, perfect for vocals and acoustic instruments. The KSM44A is a multi-pattern condenser mic offering flexibility with switchable polar patterns, making it versatile for various recording sources. The SM81, a small-diaphragm cardioid condenser, is renowned for its flat frequency response and precision, making it great for acoustic instruments and cymbals. The PG27 is a more affordable large-diaphragm condenser, designed for both vocals and instruments with a wide dynamic range. These mics are widely used in professional studio settings for their accuracy and wide frequency response."
            }
        },
        "processing": {
            question: "Would you like to know about EQ, compression, gate, limiter, or reverb?",
            responses: {
                "eq": "EQ (Equalization) adjusts the balance of frequency content. Use HPF/LPF to clean up, and cuts to fix masking issues.",
                "compression": "Compression reduces dynamic range. Set ratio, threshold, attack, and release for punch and consistency.",
                "gate": "Gates mute low-level signals. Ideal for drums or vocals to eliminate bleed and noise.",
                "limiter": "A limiter is like a fast compressor with a hard ceiling. Use it on master busses to avoid clipping.",
                "reverb": "Reverb adds spatial depth. Use plate or hall for vocals, room for drums. Don't overdo it!"
            }
        }
    };

    let awaitingTopicDetail = null;
    let awaitingSubDetail = null;

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = userInput.value.trim().toLowerCase();
        if (!input) return;

        appendMessage("user", input);
        userInput.value = "";


        if (awaitingSubDetail) {
            const sub = awaitingSubDetail;
            const matched = Object.keys(sub.subResponses).find(k => input.includes(k));
            if (matched) {
                appendMessage("bot", sub.subResponses[matched]);
                awaitingSubDetail = null;
                return;
            } else {
                appendMessage("bot", "Could you clarify which part you're asking about?");
                return;
            }
        }

        if (awaitingTopicDetail) {
            const topicObj = topics[awaitingTopicDetail].responses;
            const matchedKey = Object.keys(topicObj).find(k => input.includes(k));
            if (matchedKey) {
                const matched = topicObj[matchedKey];
                if (typeof matched === "string") {
                    appendMessage("bot", matched);
                    awaitingTopicDetail = null;
                } else {
                    appendMessage("bot", matched.followUp);
                    awaitingSubDetail = matched;
                    awaitingTopicDetail = null;
                }
            } else {
                appendMessage("bot", "Could you specify that more clearly?");
            }
            return;
        }


        const topic = Object.keys(topics).find(key => input.includes(key));
        if (topic) {
            appendMessage("bot", topics[topic].question);
            awaitingTopicDetail = topic;
        } else {
            appendMessage("bot", "I can help with Midas mixers, PA systems, IEMs, Shure microphones, and audio processing tools like EQ, compression, gates, and reverb. What do you want to ask?");
        }
    });

    function appendMessage(sender, text) {
        const msg = document.createElement("div");
        msg.className = `message ${sender}`;
        msg.textContent = `${sender === "bot" ? "Bot" : "You"}: ${text}`;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    appendMessage("bot", "Hi! Ask me about Midas mixers, PA systems, IEMs, Shure mics, or audio processing tools like EQ, compression, gates, and reverb.");
});
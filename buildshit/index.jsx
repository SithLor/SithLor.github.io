import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import twIcon from './tw/tw.svg';

import customExtensionIcon from './custom/custom.svg';

import galleryIcon from './gallery/gallery.svg';
import stretchIcon from './gallery/stretch.svg';
import gamepadIcon from './gallery/gamepad.svg';
import cursorIcon from './gallery/cursor.svg';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Blocks"
                description="Name of TW extension"
                id="tw.twExtension.name"
            />
        ),
        extensionId: 'tw',
        iconURL: twIcon,
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks."
                description="Description of TW extension"
                id="tw.twExtension.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['tw'],
        featured: true
    },
    // Extensions loaded from URLs do not support localization, so unfortunately we will just leave English names here.
    {
        name: 'Stretch',
        extensionId: 'stretch',
        extensionURL: 'https://sithlor.github.io/stretch.js',
        iconURL: stretchIcon,
        description: 'Stretch sprites horizontally or vertically.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Gamepad',
        extensionId: 'Gamepad',
        extensionURL: 'https://sithlor.github.io/gamepad.js',
        iconURL: gamepadIcon,
        description: 'Directly access gamepads instead of just mapping buttons to keys.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Box2D',
        extensionId: 'Box2D',
        extensionURL: 'https://sithlor.github.io/box2d.js',
        iconURL: cursorIcon,
        description: 'Two dimensional physics. Originally created by griffpatch.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Files',
        extensionId: 'Files',
        extensionURL: 'https://sithlor.github.io/files.js',
        iconURL: cursorIcon,
        description: 'Read and Download Files',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Pointerlock',
        extensionId: 'PointerLOCK',
        extensionURL: 'https://sithlor.github.io/pointerlock.js',
        iconURL: cursorIcon,
        description: 'Adds blocks for mouse locking. Mouse x & y blocks will report the change since the previous frame while the pointer is locked. Replaces the pointerlock experiment.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Mouse Cursor',
        extensionId: 'MouseCursor',
        extensionURL: 'https://sithlor.github.io/cursor.js',
        iconURL: cursorIcon,
        description: 'Use custom cursors or hide the cursor. Also allows replacing the cursor with any costume image.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Runtime Options',
        extensionId: 'RuntimeOptions',
        extensionURL: 'https://sithlor.github.io/runtime-options.js',
        iconURL: cursorIcon,
        description: 'Get and modify turbo mode, framerate, interpolation, clone limit, stage size, and more.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Runtime Options',
        extensionId: 'RuntimeOptions',
        extensionURL: 'https://sithlor.github.io/runtime-options.js',
        iconURL: cursorIcon,
        description: 'Get and modify turbo mode, framerate, interpolation, clone limit, stage size, and more.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Fetch',
        extensionId: 'fetch_',
        extensionURL: 'https://sithlor.github.io/fetch.js',
        iconURL: cursorIcon,
        description: 'Make requests to the broader internet.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Text',
        extensionId: 'TEXT',
        extensionURL: 'https://sithlor.github.io/text.js',
        iconURL: cursorIcon,
        description: 'Manipulate characters and text. Originally created by CST1229.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Ping Cloud Data',
        extensionId: 'PingCloudData',
        extensionURL: 'https://sithlor.github.io/clouddata-ping.js',
        iconURL: cursorIcon,
        description: 'Determine whether a cloud variable server is probably up. Originally created by TheShovel.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Sound',
        extensionId: 'SOUND',
        extensionURL: 'https://sithlor.github.io/sound.js',
        iconURL: cursorIcon,
        description: 'Play sounds from URLs.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Bitwise',
        extensionId: 'BITWISE',
        extensionURL: 'https://sithlor.github.io/bitwise.js',
        iconURL: cursorIcon,
        description: 'Blocks that operate on the binary representation of numbers in computers.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Navigator',
        extensionId: 'NAVIGA_TOR',
        extensionURL: 'https://sithlor.github.io/bitwise.js',
        iconURL: cursorIcon,
        description: 'Details about the users browser and operating system',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Pen Plus',
        extensionId: 'PenPlus',
        extensionURL: 'https://sithlor.github.io/penplus.js',
        iconURL: cursorIcon,
        description: 'Advanced rendering capabilities. Created by Obviousalexc.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Utilities',
        extensionId: 'Utilities',
        extensionURL: 'https://sithlor.github.io/utilities.js',
        iconURL: cursorIcon,
        description: 'A bunch of interesting blocks. Originally created by Sheep_maker.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Augmented Reality',
        extensionId: 'AugmentedReality',
        extensionURL: 'https://sithlor.github.io/ar.js',
        iconURL: cursorIcon,
        description: 'Shows image from camera and performs motion tracking, allowing 3D projects to correctly overlay virtual objects on real world. Created by Vadik1.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Encoding',
        extensionId: 'ENcoding',
        extensionURL: 'https://sithlor.github.io/encoding.js',
        iconURL: cursorIcon,
        description: ' Encode and decode strings into their unicode numbers, base 64, or URLs. Created by -SIPC-.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Cloudlink',
        extensionId: 'CLoudlink',
        extensionURL: 'https://sithlor.github.io/cloudlink.js',
        iconURL: cursorIcon,
        description: 'Powerful WebSocket extension for Scratch 3. Created by MikeDEV.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Network',
        extensionId: 'NEtwork',
        extensionURL: 'https://sithlor.github.io/true-fantom/network.js',
        iconURL: cursorIcon,
        description: 'Various blocks for interacting with the network. Created by TrueFantom.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Numerical Encoding',
        extensionId: 'NumericalEncoding',
        extensionURL: 'https://sithlor.github.io/cs2627883/numericalencoding.js',
        iconURL: cursorIcon,
        description: 'Encode strings as numbers for cloud variables. Created by cs2627883.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'RixxyX',
        extensionId: 'RIxxyX',
        extensionURL: 'https://sithlor.github.io/rixxyx.js',
        iconURL: cursorIcon,
        description: 'Various utility blocks. Created by RixTheTyrunt.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'time',
        extensionId: 'time',
        extensionURL: 'https://sithlor.github.io/-SIPC-/time.js',
        iconURL: cursorIcon,
        description: 'Blocks for interacting with unix timestamps and other date strings. Created by -SIPC-.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Consoles',
        extensionId: 'ConsoleS',
        extensionURL: 'https://sithlor.github.io/-SIPC-/consoles.js',
        iconURL: cursorIcon,
        description: 'Blocks that interact the JavaScript console built in to your browsers developer tools. Created by -SIPC-.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: 'Bad Word Remover',
        extensionId: 'BadWordRemover',
        extensionURL: 'https://sithlor.github.io/TheShovel/profanity.js',
        iconURL: cursorIcon,
        description: 'Blocks that can remove bad words from text. Not 100% accurate. Created by TheShovel.',
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Extension Gallery"
                description="Name of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.name"
            />
        ),
        href: 'https://extensions.turbowarp.org/',
        extensionId: '',
        iconURL: galleryIcon,
        description: (
            <FormattedMessage
                defaultMessage="extensions.turbowarp.org is the place to find powerful and safe custom extensions."
                description="Description of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.description"
            />
        ),
        tags: ['tw'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of custom extension category"
                id="tw.customExtension.name"
            />
        ),
        extensionId: '',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs."
                description="Description of custom extension category"
                id="tw.customExtension.description"
            />
        ),
        tags: ['tw'],
        featured: true
    }
];

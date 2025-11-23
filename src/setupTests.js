import "@testing-library/jest-dom";

// src/setupTests.js
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// You can also keep other Jest setup code here if needed

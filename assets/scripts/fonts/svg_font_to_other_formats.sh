#!/bin/bash

# Convert a font file to .ttf:
fontforge -script ./convert2ttf.pe $1

# Convert a font file to .eot:
fontforge -script ./convert2eot.pe $1

# Convert a font file to .woff:
fontforge -script ./convert2woff.pe $1
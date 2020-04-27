// se charge au chargement de la page uniquement

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"

// background se charge seulement au chargement de la page :
// on peut mixer ce systeme avec le context api et les state global

import React from 'react'
import Background from './src/components/background';

export const wrapPageElement = ({ element }) => {
    return (
        <>
            {element}
            <Background />
        </>
    )
}

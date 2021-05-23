export default {
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '5px 5px 10px 1px gray',
        '@media screen and (max-width: 500px)':{
            flexDirection: 'column-reverse',
        },
    },
    h1: {
        '@media screen and (max-width: 900px)':{
            fontSize: '20px'
        },
        '@media screen and (max-width: 735px)':{
            display: 'none'
        }
    },
    creatorInput: {
        width: '80%',
        '@media screen and (max-width: 900px)':{
            fontSize: '12px',
            width: '60%'
        },
        '@media screen and (max-width: 500px)':{
            width: '100%',
        },
    },
    creatorButton: {
        background: '#da7f8f',
        '@media screen and (max-width: 900px)':{
            fontSize: '12px'
        }
    },
    creatorText: {
        transform: 'translateX(-25%)',
        '@media screen and (max-width: 900px)':{
            fontSize: '11px'
        }
    },
    filterInput: {
        maxWidth: '50%', 
        margin: '20px',
        '@media screen and (max-width: 900px)':{
            fontSize: '11px'
        }
    },
    stats: {
        fontSize: '15px',
        borderRadius: '1.3em',
        padding: '1.3em',
        background: '#a7bbc7',
        color: 'white',
        '@media screen and (max-width: 900px)':{
            fontSize: '13px'
        },
        '@media screen and (max-width: 500px)':{
            fontSize: '10px',
            margin: '0.7em'
        },
      },
    itemPosition: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        fontSize: '20px',
        borderRadius: '1em',
        background: '#e1e5ea',
        margin: '1em',
        padding: '1em',
        minWidth: '12.5em',
        '@media screen and (max-width: 1000px)':{
            fontSize: '18px'
        },
        '@media screen and (max-width: 900px)':{
            fontSize: '16px'
        },
        '@media screen and (max-width: 735px)':{
            minWidth:'9em'
        }
      },
    itemHeading: {
        fontSize:'0.9em',
        color: '#da7f8f',
        margin: '0.6em',
      },
    itemText: {
        fontSize:'0.6em',
        textAlign:'left',
        width: '100%',
        background: '#a7bbc7',
        borderRadius: '1em',
        padding: '1em',
        margin: '1em',
        color: 'white',
        height: '7em',
        overflow: 'auto'
      },
    itemLabel: {
        color: '#a7bbc7',
        margin: '1em',
        fontSize: '0.8em',
        '@media screen and (max-width: 1000px)':{
            fontSize: '0.7em'
        },
      },
    itemButton: {
        background: '#da7f8f',
        fontSize: '0.7em',
        '@media screen and (max-width: 1000px)':{
            fontSize: '0.6em'
        },
    },
    itemGrid: { 
        gridTemplateColumns: 'repeat(3, 1fr)',
        width: '80%',
        '@media screen and (max-width: 900px)':{
            gridTemplateColumns: 'repeat(2, 1fr)'
        },
        '@media screen and (max-width: 735px)':{
            gridTemplateColumns: 'repeat(1, 1fr)'
        }
    },
    itemLink: {
        textDecoration:'none', 
        fontSize:'15px', 
        margin:'1em', 
        color: '#da7f8f',
    }
}
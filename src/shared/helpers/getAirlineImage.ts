import aeroflot from '../images/aeroflot.png'
import airAstana from '../images/airAstana.png'
import airFrance from '../images/airFrance.png'
import airIndia from '../images/airIndia.png'
import britishAirways from '../images/britishAirways.png'
import emirates from '../images/emirates.png'
import etihadAirways from '../images/etihadAirways.png'
import flyDubai from '../images/flyDubai.png'
import koreanAir from '../images/koreanAir.png'
import lufthansa from '../images/lufthansa.png'
import pegasusAirlines from '../images/pegasusAirlines.png'
import qantas from '../images/qantas.png'
import qatarAirways from '../images/qatarAirways.png'
import singaporeAirlines from '../images/singaporeAirlines.png'
import swissInternationalAirLines from '../images/swissInternationalAirLines.png'
import thaiAirways from '../images/thaiAirways.png'
import turkishAirlines from '../images/turkishAirlines.png'
import uzbekistanAirways from '../images/uzbekistanAirways.png'

export const getAirlineImage = (airline: string) => {
  switch (airline) {
    case 'Aeroflot': {
      return aeroflot
    }
    case 'Air Astana': {
      return airAstana
    }
    case 'Air France': {
      return airFrance
    }
    case 'Air India': {
      return airIndia
    }
    case 'British Airways': {
      return britishAirways
    }
    case 'Emirates': {
      return emirates
    }
    case 'Etihad Airways': {
      return etihadAirways
    }
    case 'FlyDubai': {
      return flyDubai
    }
    case 'Korean Air': {
      return koreanAir
    }
    case 'Lufthansa': {
      return lufthansa
    }
    case 'Pegasus Airlines': {
      return pegasusAirlines
    }
    case 'Qantas': {
      return qantas
    }
    case 'Qatar Airways': {
      return qatarAirways
    }
    case 'Singapore Airlines': {
      return singaporeAirlines
    }
    case 'Swiss International Air Lines': {
      return swissInternationalAirLines
    }
    case 'Thai Airways': {
      return thaiAirways
    }
    case 'Turkish Airlines': {
      return turkishAirlines
    }
    case 'Uzbekistan Airways': {
      return uzbekistanAirways
    }
  }
}

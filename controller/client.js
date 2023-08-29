const express = require("express")
const router = express.Router()
const app = express()
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const { Case } = require("../database/databaseConfig")
const random_number = require("random-number")


module.exports.gethome = async (req, res) => {

   //res.status(200).render('home',{no_recovered_cars:no_of_recoveries,no_of_users:no_of_users,data:data})
   res.status(200).render('page/home')

}
module.exports.getAbout = async (req, res) => {

   //res.status(200).render('home',{no_recovered_cars:no_of_recoveries,no_of_users:no_of_users,data:data})
   res.status(200).render('page/about')

}

module.exports.getContact = async (req, res) => {

   //res.status(200).render('home',{no_recovered_cars:no_of_recoveries,no_of_users:no_of_users,data:data})
   res.status(200).render('page/contact')

}

module.exports.getSingleAttorney = async (req, res) => {

   res.status(200).render('attorneys/singleAttorney')

}
module.exports.getMultipleAttorney = async (req, res) => {

   res.status(200).render('attorneys/multipleAttorney')

}

module.exports.alternative_dispute_resolution = async (req, res) => {
   res.status(200).render('practise_area/alternative-dispute-resolution')
}


module.exports.civil_Litigation = async (req, res) => {
   res.status(200).render('practise_area/civil-Litigation')
}

module.exports.family_law = async (req, res) => {
   res.status(200).render('practise_area/family-law')
}

module.exports.real_estate_law = async (req, res) => {
   res.status(200).render('practise_area/real-estate-law')
}

module.exports.construction_law = async (req, res) => {
   res.status(200).render('practise_area/construction-law')
}

module.exports.probate_law = async (req, res) => {
   res.status(200).render('practise_area/probate-law')
}

module.exports.real_property = async (req, res) => {
   res.status(200).render('practise_area/real-property')
}
module.exports.business_law = async (req, res) => {
   res.status(200).render('practise_area/business-law')
}

module.exports.elder_law = async (req, res) => {
   res.status(200).render('practise_area/elder-law')
}

module.exports.practise_area = async (req, res) => {
   res.status(200).render('practise_area/practise-area')
}


module.exports.track_case = async (req, res) => {
   res.status(200).render('page/track')
}

module.exports.track_case_result = async (req, res) => {
   res.status(200).render('page/track-result')
}

module.exports.new_case = async (req, res) => {
   res.status(200).render('page/new-case')
}


Case.find().then(data => {
   console.log(data)
})

module.exports.post_case = async (req, res) => {
   //logic to retrieve case from the backend
   let { consignment } = req.body

   console.log(req.body)

   let caseFound = await Case.findOne({ caseNumber: consignment })

   if (!caseFound) {
      return res.status(200).render('page/track-no-result')
   }

   /*
   {
  _id: 64ecc0c29a723e100445df40,
  caseOwner: 'Precious Arierhi',
  clientEmail: 'arierhiprecious@gmail.com',
  clientPhoneNumber: '09071991947',
  caseSubject: 'suuuu',
  clientAddress: 'Agh\r\nGhaa',
  caseCategory: 'Financial Law',
  caseMatter: 'my case',
  status: 'pending',
  attorney: 'Not Assigned',
  courtCaseNumber: 'CASE-48412',
  caseNumber: 'CASE-48412',
  progress: '0',
  __v: 0
}


   */

   return res.status(200).render('page/track-result', {
      cases: caseFound
   })


}

module.exports.track_case = async (req, res) => {
   //logic to retrieve case from the backend

   return res.status(200).render('page/track')

}


module.exports.create_case = async (req, res) => {
   try {

      //logic to retrieve case from the backend
      let {
         fname,
         email,
         phone,
         law,
         subject,
         address,
         cases
      } = req.body


      //creating random number for case

      let generateCaseNumber = random_number({
         max: 50000,
         min: 40000,
         integer: true
      })


      let generateCaseString = `CASE-${generateCaseNumber}`

      console.log(generateCaseString)


      let newCase = new Case({
         _id: new mongoose.Types.ObjectId(),
         caseOwner: fname,
         clientEmail: email,
         clientPhoneNumber: phone,
         caseSubject: subject,
         clientAddress: address,
         caseCategory: law,
         caseMatter: cases,
         status: 'pending',
         attorney: 'Not Assigned',
         courtCaseNumber: generateCaseString,
         caseNumber: generateCaseString,
         progress: 0,
      })

      let savedCase = await newCase.save()

      if (!savedCase) {
         return res.status(200).render('page/new-case-error')
      }

      return res.status(200).render('page/new-case-success')


   } catch (err) {
      console.log(err)
      return res.status(200).render('page/new-case-error')
   }

}
























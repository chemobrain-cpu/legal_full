const express = require("express")
const router = express.Router()
const app = express()
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const { Case, Attorney } = require("../database/databaseConfig")
const random_number = require("random-number")




// group_1 controllers
module.exports.gethome_1 = async (req, res) => {
   res.status(200).render('Group1/page/home')
}

module.exports.getAbout_1 = async (req, res) => {

   res.status(200).render('Group1/page/about')

}

module.exports.getPricing_1 = async (req, res) => {

   res.status(200).render('Group1/page/pricing')

}

module.exports.getGallery_1 = async (req, res) => {

   res.status(200).render('Group1/page/gallery')

}

module.exports.getFaqs_1 = async (req, res) => {

   res.status(200).render('Group1/page/faq')

}


module.exports.getContact_1 = async (req, res) => {
   res.status(200).render('Group1/page/contact')
}

module.exports.getSingleAttorney_1 = async (req, res) => {
   try {
      //get all attorneys

      let attorneyId = req.params.id

      let attorney = await Attorney.findOne({_id:attorneyId})
      console.log(attorney)

      return res.status(200).render('Group1/attorneys/singleAttorney',{attorney:attorney})

   } catch (error) {
      console.log(error)
      error.message = error.message || "an error occured try later"

      return next(error)
   }

}

module.exports.getMultipleAttorney_1 = async (req, res, next) => {
   try {
      //get all attorneys

      let attorneys = await Attorney.find()
      console.log(attorneys)

      return res.status(200).render('Group1/attorneys/multipleAttorney', { attorneys: attorneys })

   } catch (error) {
      console.log(error)
      error.message = error.message || "an error occured try later"

      return next(error)
   }



}

module.exports.alternative_dispute_resolution_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/alternative-dispute-resolution')
}

module.exports.civil_Litigation_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/civil-Litigation')
}

module.exports.family_law_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/family-law')
}

module.exports.real_estate_law_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/real-estate-law')
}

module.exports.construction_law_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/construction-law')
}

module.exports.probate_law_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/probate-law')
}

module.exports.real_property_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/real-property')
}

module.exports.business_law_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/business-law')
}

module.exports.elder_law_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/elder-law')
}

module.exports.practise_area_1 = async (req, res) => {
   res.status(200).render('Group1/practise_area/practise-area')
}





module.exports.track_case_1 = async (req, res) => {
   res.status(200).render('Group1/page/track')
}

module.exports.track_case_result_1 = async (req, res) => {
   res.status(200).render('Group1/page/track-result')
}

module.exports.new_case_1 = async (req, res) => {
   res.status(200).render('Group1/page/new-case')
}

module.exports.post_case_1 = async (req, res) => {
   //logic to retrieve case from the backend
   let { consignment } = req.body

   let caseFound = await Case.findOne({ caseNumber: consignment })

   if (!caseFound) {
      return res.status(200).render('Group1/page/track-no-result')
   }

   return res.status(200).render('Group1/page/track-result', {
      cases: caseFound
   })


}

module.exports.track_case_1 = async (req, res) => {
   //logic to retrieve case from the backend

   return res.status(200).render('Group1/page/track')

}

module.exports.create_case_1 = async (req, res) => {
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
         return res.status(200).render('Group1/page/new-case-error')
      }

      return res.status(200).render('Group1/page/new-case-success')


   } catch (err) {
      console.log(err)
      return res.status(200).render('Group1/page/new-case-error')
   }

}






module.exports.blog_1 = async (req, res) => {
   //logic to retrieve case from the backend

   return res.status(200).render('Group1/blog/blog')

}
module.exports.blogs_1 = async (req, res) => {
   //logic to retrieve case from the backend

   return res.status(200).render('Group1/blog/blogs')

}

module.exports.case_1 = async (req, res) => {
   return res.status(200).render('Group1/case/case')

}
module.exports.cases_1 = async (req, res) => {
   return res.status(200).render('Group1/case/cases')

}


// group_2 controllers
module.exports.gethome_2 = async (req, res) => {
   console.log('reacheddd')
   res.status(200).render('Group2/page/home')
}

module.exports.getAbout_2 = async (req, res) => {

   res.status(200).render('Group2/page/about')

}

module.exports.getPricing_2 = async (req, res) => {

   res.status(200).render('Group2/page/pricing')

}

module.exports.getGallery_2 = async (req, res) => {
   res.status(200).render('Group2/page/gallery')

}

module.exports.getFaqs_2 = async (req, res) => {

   res.status(200).render('Group2/page/faq')

}

module.exports.getContact_2 = async (req, res) => {
   res.status(200).render('Group2/page/contact')
}



module.exports.alternative_dispute_resolution_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/alternative-dispute-resolution')
}

module.exports.civil_Litigation_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/civil-Litigation')
}

module.exports.family_law_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/family-law')
}

module.exports.real_estate_law_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/real-estate-law')
}

module.exports.construction_law_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/construction-law')
}

module.exports.probate_law_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/probate-law')
}

module.exports.real_property_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/real-property')
}

module.exports.business_law_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/business-law')
}

module.exports.elder_law_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/elder-law')
}

module.exports.practise_area_2 = async (req, res) => {
   res.status(200).render('Group2/practise_area/practise-area')
}





module.exports.blog_2 = async (req, res) => {
   //logic to retrieve case from the backend

   return res.status(200).render('Group2/blog/blog')

}
module.exports.blogs_2 = async (req, res) => {
   //logic to retrieve case from the backend

   return res.status(200).render('Group2/blog/blogs')

}










// group_3 controllers
module.exports.gethome_3 = async (req, res) => {
   res.status(200).render('Group3/page/home')
}

module.exports.getAbout_3 = async (req, res) => {

   res.status(200).render('Group3/page/about')

}


module.exports.getContact_3 = async (req, res) => {
   res.status(200).render('Group3/page/contact')
}



module.exports.alternative_dispute_resolution_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/alternative-dispute-resolution')
}

module.exports.civil_Litigation_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/civil-Litigation')
}

module.exports.family_law_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/family-law')
}

module.exports.real_estate_law_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/real-estate-law')
}

module.exports.construction_law_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/construction-law')
}

module.exports.probate_law_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/probate-law')
}

module.exports.real_property_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/real-property')
}

module.exports.business_law_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/business-law')
}

module.exports.elder_law_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/elder-law')
}

module.exports.practise_area_3 = async (req, res) => {
   res.status(200).render('Group3/practise_area/practise-area')
}




module.exports.blog_3 = async (req, res) => {
   //logic to retrieve case from the backend

   return res.status(200).render('Group3/blog/blog')

}





// group_4 controllers
module.exports.gethome_4 = async (req, res) => {
   res.status(200).render('Group4/page/home')
}

module.exports.getAbout_4 = async (req, res) => {

   res.status(200).render('Group4/page/about')

}


module.exports.getContact_4 = async (req, res) => {
   res.status(200).render('Group4/page/contact')
}



module.exports.alternative_dispute_resolution_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/alternative-dispute-resolution')
}

module.exports.civil_Litigation_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/civil-Litigation')
}

module.exports.family_law_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/family-law')
}


module.exports.real_estate_law_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/real-estate-law')
}

module.exports.construction_law_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/construction-law')
}

module.exports.probate_law_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/probate-law')
}

module.exports.real_property_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/real-property')
}

module.exports.business_law_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/business-law')
}

module.exports.elder_law_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/elder-law')
}

module.exports.practise_area_4 = async (req, res) => {
   res.status(200).render('Group4/practise_area/practise-area')
}









// group_5 controllers
module.exports.gethome_5 = async (req, res) => {
   res.status(200).render('Group5/page/home')
}

module.exports.getAbout_5 = async (req, res) => {

   res.status(200).render('Group5/page/about')

}


module.exports.getContact_5 = async (req, res) => {

   res.status(200).render('Group5/page/contact')
}



module.exports.alternative_dispute_resolution_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/alternative-dispute-resolution')
}

module.exports.civil_Litigation_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/civil-Litigation')
}

module.exports.family_law_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/family-law')
}


module.exports.real_estate_law_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/real-estate-law')
}

module.exports.construction_law_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/construction-law')
}

module.exports.probate_law_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/probate-law')
}

module.exports.real_property_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/real-property')
}

module.exports.business_law_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/business-law')
}

module.exports.elder_law_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/elder-law')
}

module.exports.practise_area_5 = async (req, res) => {
   res.status(200).render('Group5/practise_area/practise-area')
}














































































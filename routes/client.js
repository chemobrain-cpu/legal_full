const express = require("express")
const router = express.Router()
const app = express()
const ejs = require("ejs")
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")











//importing from group1
let gethome_1 = require("../controller/client").gethome_1

let getPricing_1 = require("../controller/client").getPricing_1

let getGallery_1 = require("../controller/client").getGallery_1

let getFaqs_1 = require("../controller/client").getFaqs_1

let getAbout_1 = require("../controller/client").getAbout_1

let getContact_1 = require("../controller/client").getContact_1

let getSingleAttorney_1 = require("../controller/client").getSingleAttorney_1

let getMultipleAttorney_1 = require("../controller/client").getMultipleAttorney_1

let alternative_dispute_resolution_1 = require("../controller/client").alternative_dispute_resolution_1

let civil_Litigation_1 = require("../controller/client").civil_Litigation_1

let family_law_1 = require("../controller/client").family_law_1

let real_estate_law_1 = require("../controller/client").real_estate_law_1

let construction_law_1 = require("../controller/client").construction_law_1

let probate_law_1 = require("../controller/client").probate_law_1

let real_property_1 = require("../controller/client").real_property_1

let business_law_1 = require("../controller/client").business_law_1

let elder_law_1 = require("../controller/client").elder_law_1


let track_case_1 = require("../controller/client").track_case_1

let track_case_result_1 = require("../controller/client").track_case_result_1

let new_case_1 = require("../controller/client").new_case_1

let practise_area_1 = require("../controller/client").practise_area_1

let post_case_1 = require("../controller/client").post_case_1

let create_case_1 = require("../controller/client").create_case_1

//blogs
let blog_1 = require("../controller/client").blog_1
let blogs_1 = require("../controller/client").blogs_1

//cases
let case_1 = require("../controller/client").case_1
let cases_1 = require("../controller/client").cases_1









//importing from group2
let gethome_2 = require("../controller/client").gethome_2

let getAbout_2 = require("../controller/client").getAbout_2

let getContact_2 = require("../controller/client").getContact_2

let getPricing_2 = require("../controller/client").getPricing_2

let getGallery_2 = require("../controller/client").getGallery_2

let getFaqs_2 = require("../controller/client").getFaqs_2



let alternative_dispute_resolution_2 = require("../controller/client").alternative_dispute_resolution_2

let civil_Litigation_2 = require("../controller/client").civil_Litigation_2

let family_law_2 = require("../controller/client").family_law_2

let real_estate_law_2 = require("../controller/client").real_estate_law_2

let construction_law_2 = require("../controller/client").construction_law_2

let probate_law_2 = require("../controller/client").probate_law_2

let real_property_2 = require("../controller/client").real_property_2

let business_law_2 = require("../controller/client").business_law_2

let elder_law_2 = require("../controller/client").elder_law_2



let practise_area_2 = require("../controller/client").practise_area_2



//bl0gs
let blog_2 = require("../controller/client").blog_2
let blogs_2 = require("../controller/client").blogs_2



//importing for group3
let gethome_3 = require("../controller/client").gethome_3

let getAbout_3 = require("../controller/client").getAbout_3

let getContact_3 = require("../controller/client").getContact_3


let alternative_dispute_resolution_3 = require("../controller/client").alternative_dispute_resolution_3

let civil_Litigation_3 = require("../controller/client").civil_Litigation_3

let family_law_3 = require("../controller/client").family_law_3

let real_estate_law_3 = require("../controller/client").real_estate_law_3

let construction_law_3 = require("../controller/client").construction_law_3

let probate_law_3 = require("../controller/client").probate_law_3

let real_property_3 = require("../controller/client").real_property_3

let business_law_3 = require("../controller/client").business_law_3

let elder_law_3 = require("../controller/client").elder_law_3



let practise_area_3 = require("../controller/client").practise_area_3







//importing for group4

let gethome_4 = require("../controller/client").gethome_4

let getAbout_4 = require("../controller/client").getAbout_4

let getContact_4 = require("../controller/client").getContact_4


let alternative_dispute_resolution_4 = require("../controller/client").alternative_dispute_resolution_4

let civil_Litigation_4 = require("../controller/client").civil_Litigation_4

let family_law_4 = require("../controller/client").family_law_4

let real_estate_law_4 = require("../controller/client").real_estate_law_4

let construction_law_4 = require("../controller/client").construction_law_4

let probate_law_4 = require("../controller/client").probate_law_4

let real_property_4 = require("../controller/client").real_property_4

let business_law_4 = require("../controller/client").business_law_4

let elder_law_4 = require("../controller/client").elder_law_4

let practise_area_4 = require("../controller/client").practise_area_4








//importing for group5

let gethome_5 = require("../controller/client").gethome_5

let getAbout_5 = require("../controller/client").getAbout_5

let getContact_5 = require("../controller/client").getContact_5


let alternative_dispute_resolution_5 = require("../controller/client").alternative_dispute_resolution_5

let civil_Litigation_5 = require("../controller/client").civil_Litigation_5

let family_law_5 = require("../controller/client").family_law_5

let real_estate_law_5 = require("../controller/client").real_estate_law_5

let construction_law_5 = require("../controller/client").construction_law_5

let probate_law_5 = require("../controller/client").probate_law_5

let real_property_5 = require("../controller/client").real_property_5

let business_law_5 = require("../controller/client").business_law_5

let elder_law_5 = require("../controller/client").elder_law_5



let practise_area_5 = require("../controller/client").practise_area_5











//defining external routes

router.get('/attorneys', getMultipleAttorney_1)
router.get('/blogs', blogs_1)


//group_1 routes

//-- home_6
router.get("/", gethome_1)
//-- information
router.get('/about_1', getAbout_1)
router.get('/contact_1', getContact_1)
router.get('/contact-us_1', getContact_1)
router.get('/pricing_1', getPricing_1)
router.get('/gallery_1', getGallery_1)
router.get('/faqs_1', getFaqs_1)
//-- attorneys
router.get('/attorney-single_1/:id', getSingleAttorney_1)
router.get('/attorney_1/:id', getSingleAttorney_1)
router.get('/attorneys_1', getMultipleAttorney_1)
//-- practise areas
router.get('/alternative-dispute-resolution_1', alternative_dispute_resolution_1)
router.get('/civil-Litigation_1', civil_Litigation_1)
router.get('/family-law_1', family_law_1)
router.get('/real-estate-law_1', real_estate_law_1)
router.get('/construction-law_1', construction_law_1)
router.get('/probate-law_1', probate_law_1)
router.get('/real-property_1', real_property_1)
router.get('/business-law_1', business_law_1)
router.get('/elder-law_1', elder_law_1)
router.get('/practise_area_1', practise_area_1)
//--blogs
router.get('/blog_1', blog_1)
router.get('/blogs_1', blogs_1)
//--cases
router.get('/case_1', case_1)
router.get('/cases_1', cases_1)

//--tracking
router.get('/track_1', track_case_1)
router.get('/track-case_1', track_case_1)
router.get('/track-result_1', track_case_result_1)
router.post('/case-result_1', post_case_1)
router.get('/new-case_1', new_case_1)
router.post('/new-case_1', create_case_1)





//group_2 routes
router.get("/index_2", gethome_2)

//-- information
router.get('/about_2', getAbout_2)

router.get('/contact_2', getContact_2)

router.get('/contact-us_2', getContact_2)
router.get('/pricing_2', getPricing_2)
router.get('/gallery_2', getGallery_2)
router.get('/faqs_2', getFaqs_2)



//-- attorneys
router.get('/attorney-single_2/:id', getSingleAttorney_1)
router.get('/attorney_2/:id', getSingleAttorney_1)
router.get('/attorneys_2', getMultipleAttorney_1)






//-- practise areas
router.get('/alternative-dispute-resolution_2', alternative_dispute_resolution_2)

router.get('/civil-Litigation_2', civil_Litigation_2)

router.get('/family-law_2', family_law_2)

router.get('/real-estate-law_2', real_estate_law_2)

router.get('/construction-law_2', construction_law_2)

router.get('/probate-law_2', probate_law_2)

router.get('/real-property_2', real_property_2)

router.get('/business-law_2', business_law_2)

router.get('/elder-law_2', elder_law_2)
router.get('/practise_area_2', practise_area_2)


//--blogs
router.get('/blog_2', blog_2)
router.get('/blogs_2', blogs_2)









//group_3 routes
router.get("/index_3", gethome_3)

//-- information
router.get('/about_3', getAbout_3)
router.get('/contact_3', getContact_3)
router.get('/contact-us_3', getContact_3)
router.get('/pricing_3', getPricing_2)
router.get('/gallery_3', getGallery_2)
router.get('/faqs_3', getFaqs_2)



//-- attorneys
router.get('/attorney-single_3/:id', getSingleAttorney_1)
router.get('/attorney_3/:id', getSingleAttorney_1)
router.get('/attorneys_3', getMultipleAttorney_1)





//-- practise areas
router.get('/alternative-dispute-resolution_3', alternative_dispute_resolution_3)

router.get('/civil-Litigation_3', civil_Litigation_3)

router.get('/family-law_3', family_law_3)

router.get('/real-estate-law_3', real_estate_law_3)

router.get('/construction-law_3', construction_law_3)

router.get('/probate-law_3', probate_law_3)

router.get('/real-property_3', real_property_3)

router.get('/business-law_3', business_law_3)

router.get('/elder-law_3', elder_law_3)
router.get('/practise_area_3', practise_area_3)


//--blogs
router.get('/blog_3', blog_1)
router.get('/blogs_3', blogs_1)

//--cases








//group_4 routes
router.get("/index_4", gethome_4)

//-- information
router.get('/about_4', getAbout_4)

router.get('/contact_4', getContact_4)

router.get('/contact-us_4', getContact_4)
router.get('/pricing_4', getPricing_2)
router.get('/gallery_4', getGallery_2)
router.get('/faqs_4', getFaqs_2)

//-- attorneys
router.get('/attorney-single_4/:id', getSingleAttorney_1)
router.get('/attorney_4/:id', getSingleAttorney_1)
router.get('/attorneys_4', getMultipleAttorney_1)




//-- practise areas
router.get('/alternative-dispute-resolution_4', alternative_dispute_resolution_4)
router.get('/civil-Litigation_4', civil_Litigation_4)

router.get('/family-law_4', family_law_4)

router.get('/real-estate-law_4', real_estate_law_4)

router.get('/construction-law_4', construction_law_4)

router.get('/probate-law_4', probate_law_4)

router.get('/real-property_4', real_property_4)
router.get('/business-law_4', business_law_4)

router.get('/elder-law_4', elder_law_4)
router.get('/practise_area_4', practise_area_4)


//--blogs
router.get('/blog_4', blog_1)
router.get('/blogs_4', blogs_1)










//group_5 routes

router.get("/index_5", gethome_5)

//-- information
router.get('/about_5', getAbout_5)

router.get('/contact_5', getContact_5)

router.get('/contact-us_5', getContact_5)
router.get('/pricing_5', getPricing_2)
router.get('/gallery_5', getGallery_2)
router.get('/faqs_5', getFaqs_2)

//-- attorneys
router.get('/attorney-single_5/:id', getSingleAttorney_1)
router.get('/attorney_5/:id', getSingleAttorney_1)
router.get('/attorneys_5', getMultipleAttorney_1)




//-- practise areas
router.get('/alternative-dispute-resolution_5', alternative_dispute_resolution_5)

router.get('/civil-Litigation_5', civil_Litigation_5)

router.get('/family-law_5', family_law_5)

router.get('/real-estate-law_5', real_estate_law_5)

router.get('/construction-law_5', construction_law_5)

router.get('/probate-law_5', probate_law_5)

router.get('/real-property_5', real_property_5)

router.get('/business-law_5', business_law_5)

router.get('/elder-law_5', elder_law_5)

router.get('/practise_area_5', practise_area_5)


//--blogs
router.get('/blog_5', blog_1)
router.get('/blogs_5', blogs_1)

















exports.router = router
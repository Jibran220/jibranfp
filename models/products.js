import mongoose from "mongoose"



const productSchema = mongoose.Schema({
    productname: String,
    // selectmenu: String,
    // fruitsarray: [String],
    // radio: String,
    // checked: Boolean,
    // asd: String,
    // gender: Boolean,


    // selectedFile: String,


    // General product information
    Regulatory_Model_Name: String,
    Product_Name: String,
    Regulatory_Family: String,
    Product_Category: String,
    Product_Description: String,
    Model_Difference: String,



Household: Boolean,
Commercial: Boolean,
Clinical: Boolean,

    Applicable_Standards: String,
    Applicant_Name_and_Address: String,
    Manufacturer_Name_and_Address: String,
    TradeMark: String,
    Family: String,
    Market: String,


    //product technical information
    Overall_Size_of_Equipment: String,
    WebGLShader: String,
    Voltage: String,
    Phase: String,
    Frequency: String,
    Power: String,
    Current: String,
    Operation_Mode: String,
    Ordinary_person: Boolean,
    Children_likely_present: Boolean,
    Instructed_person: Boolean,
    Skilled_person: Boolean,
   
    AC_mains: Boolean,
    DC_mains: Boolean,
    Battery_Powered: Boolean,


    Ordinary_person: Boolean,
        Children_likely_present: Boolean,
        Instructed_person: Boolean,
        Skilled_person: Boolean,

        Non_detachable_Supply_Cord_B: Boolean,
        Appliance_Coupler_B: Boolean,

        Non_detachable_Supply_Cord: Boolean,
        Appliance_Coupler: Boolean,
        Direct_plug_in: Boolean,
    Pluggable_equipment_type_B: Boolean,
    Permanent_connection: Boolean,
    Mating_connector: Boolean,
    Movable: Boolean,
    Transportable: Boolean,
    Stationary_for_building_in: Boolean,
    Wall_ceiling_mounted_SRME_rack_mounted: Boolean,
    Hand_held: Boolean,
    Other: Boolean,
    Equipment_Mobility: Boolean,



    //product inviromenttal information
    Pollution_Degree: String,
    Manufacturer_Specific_Max_Operating_Ambient: String,
    Ingree_Protection_Classification: String,
    Altitude_During_Operation: String,
    Mass_Of_Equipment: String,
    Relative_Humidity: String,
    Atmospheric_Pressure: String,
    Indoor: Boolean,
        Outdoor: Boolean,






    //mareting and documentatation,
    Copy_of_Marking_Plate: String,
    WarningOrCautionary_Marking: String,
    Fuse_Type: String,
    Fuse_Marking: String,


    //complaince report
    Report_Number: String,



})
const products = mongoose.model('products', productSchema)
export default products

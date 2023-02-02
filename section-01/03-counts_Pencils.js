function counts_Pencils(HowManyPeople) {
    let one_Dozen = 12
    let need_Dozen = Math.ceil(HowManyPeople / one_Dozen)        
    console.log(need_Dozen);
}

counts_Pencils(26)
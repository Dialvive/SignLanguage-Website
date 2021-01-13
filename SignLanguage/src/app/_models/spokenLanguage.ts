export class SpokenLanguage{    
    //Attributes 
    id: number;
    name_de: string;
    name_es : string;
    name_en : string;
    name_fr : string;
    name_it : string;
    name_pt : string;
    abbreviation: string;
    modified : Date;

    //Constructor
    constructor(id: number, de: string, es: string, en: string, fr: string, it: string, pt: string, abb: string, modified: Date){
        this.id = id;
        this.name_de = de;
        this.name_es  = es;
        this.name_en = en;
        this.name_fr = fr;
        this.name_it = it;
        this.name_pt = pt;
        this.abbreviation = abb
        this.modified = modified;
    }
}
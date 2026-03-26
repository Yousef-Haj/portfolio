import React, { UseState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
  Phone,
} from "lucide-react";

import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constans";
import Fadein from "../animations/Fadein";

const Project = () => {
    return(

       <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary uppercase tracking-wider">
                Project
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Coming soon 
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              under editing .
            </p>
          </div>
    )


}
export default Project;

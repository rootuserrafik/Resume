import React from 'react'
import './Resume.css'
import ResumeEducation from './ResumeEducation'
import ResumeExperience from './ResumeExperience'
import ResumeDesignSkills from './ResumeDesignSkills'
import ResumeCodingSkills from './ResumeCodingSkills'
import ResumeKnowledges from './ResumeKnowledges'
import ResumeCertificates from './ResumeCertificates'

function Resume() {
    return (
        <div className='Home__Section aboutMe arp'>
            <div className="cataSection sectionPadding ResDev">
                <div className="bodyContent__SI">
                    <h2 className="SubTitle pageHa">Resume</h2>
                    <div className="bodyContentDet dev">
                        <div className="bodyContent__SI">       
                            <h2 className="SubTitle">Experience</h2>
                            <div className="bodyContentDet">
                                <ResumeExperience />
                            </div>
                        </div>
                        <div className="bodyContent__SI apRe">       
                            <h2 className="SubTitle">Education</h2>
                            <div className="bodyContentDet">
                                <ResumeEducation />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bodyContentDet dev skills">
                    <div className="bodyContent__SI">       
                        <h2 className="SubTitle">Design Skills</h2>
                        <div className="bodyContentDet">
                            <ResumeDesignSkills />
                        </div>
                    </div>
                    <div className="bodyContent__SI apRe">       
                        <h2 className="SubTitle">Coding Skills</h2>
                        <div className="bodyContentDet">
                            <ResumeCodingSkills />
                        </div>
                    </div>
                </div>
                <div className="bodyContent__SI">       
                    <h2 className="SubTitle">Knowledges</h2>
                    <div className="bodyContentDet">
                        <ResumeKnowledges />
                    </div>
                </div>
                <div className="bodyContent__SI">       
                    <h2 className="SubTitle">Certificates</h2>
                    <div className="bodyContentDet">
                        <ResumeCertificates />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume

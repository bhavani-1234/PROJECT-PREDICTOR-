
   const  employees =  [
      {
        "id": 1,
        "personal_details": {
          "name": "Alice Smith",
          "age": 30,
          "designation": "Software Engineer",
          "email": "alice.smith@company.com",
          "phone": "123-456-7890",
          "address": "123 Maple Street, Springfield, IL, 62701",
          "languages": ["English", "Spanish"],
          "skills": ["Java", "Spring Boot", "MySQL", "RESTful APIs", "Agile Development"]
        },
        "professional_details": {
          "education": {
            "degree": "Bachelor's in Computer Science",
            "university": "University of Illinois",
            "graduation_year": 2017
          },
          "experience": [
            {
              "company": "Tech Solutions Inc.",
              "role": "Software Engineer",
              "years": 5
            }
          ],
          "certifications": [
            "Oracle Certified Java Programmer",
            "Spring Professional Certification"
          ],
          "total_years_experience": 7,
          "years_at_organization": 2,
          "current_status": "On Bench",
          "projects": [
            {
              "project_id": 101,
              "project_name": "Project X",
              "role": "Developer",
              "technologies": ["Java", "Spring Boot", "MySQL"],
              "start_date": "2023-01-01",
              "end_date": "2023-04-01",
              "overall_rating": "4/5",
              "overall_review": "Alice has demonstrated solid backend skills and contributed significantly to the overall architecture of the project. Her work with Java and Spring Boot was commendable, though communication with the team could improve.",
              "review": {
                "employee_experience": "In this project, I enhanced my backend development skills, particularly with Java and Spring Boot. I contributed to designing and implementing key features using RESTful APIs and worked on integrating MySQL databases. This experience helped me improve my coding practices, time management, and collaboration within an Agile environment. I also gained valuable insights into handling complex backend tasks and delivering high-quality solutions within deadlines.",
                "team_member_ratings": {
                  "Bob Johnson": {
                    "rating": "4/5",
                    "review": "Alice was a strong contributor, particularly in backend tasks. She integrated databases smoothly and helped design efficient API endpoints. Could have communicated more frequently in the team meetings."
                  },
                  "John Doe": {
                    "rating": "3/5",
                    "review": "Alice’s coding is strong, but I feel there was some room for improvement in team communication. However, her technical skills were key to the success of this project."
                  }
                },
                "manager_rating": {
                  "rating": "4.5/5",
                  "review": "Alice demonstrated excellent backend development skills and was proactive in learning new technologies. While her communication could be improved, her contribution to the project was substantial, and she consistently delivered quality work on time."
                },
                "comments": "Great performance, needs improvement in communication"
              }
            },
            {
              "project_id": 102,
              "project_name": "Project Y",
              "role": "Frontend Developer",
              "technologies": ["React", "Node.js"],
              "start_date": "2022-08-01",
              "end_date": "2022-12-01",
              "overall_rating": "4.5/5",
              "overall_review": "Alice excelled in frontend development, producing clean, responsive UIs. Her work with React and Node.js was excellent, and she collaborated well with the backend team, though there is room for improvement in communication during team discussions.",
              "review": {
                "employee_experience": "During this project, I focused on improving my frontend development skills with React. I was responsible for building responsive user interfaces and enhancing the application's performance. Working closely with the backend team, I ensured proper integration of API endpoints into the UI. This project also helped me understand the importance of cross-functional collaboration and refining UI/UX design.",
                "team_member_ratings": {
                  "Sarah Lee": {
                    "rating": "5/5",
                    "review": "Alice is an excellent frontend developer, and she was crucial in making the UI intuitive and responsive. Her React skills are top-notch, and she always delivers high-quality work."
                  },
                  "Jessica Green": {
                    "rating": "4/5",
                    "review": "Alice did a great job in building the frontend, but there were occasional delays in delivering some components. Still, the quality of her work was excellent."
                  }
                },
                "manager_rating": {
                  "rating": "4/5",
                  "review": "Alice demonstrated excellent technical skills in frontend development. The work she delivered met our high standards. She could work on improving communication and being more proactive in seeking feedback."
                },
                "comments": "Excellent coding skills, but communication could be improved"
              }
            }
          ]
        }
      },
      {
        "id": 2,
        "personal_details": {
          "name": "Bob Johnson",
          "age": 28,
          "designation": "Software Engineer",
          "email": "bob.johnson@company.com",
          "phone": "987-654-3210",
          "address": "456 Oak Avenue, Springfield, IL, 62702",
          "languages": ["English", "German"],
          "skills": ["Python", "Django", "PostgreSQL", "API Development", "Cloud Computing"]
        },
        "professional_details": {
          "education": {
            "degree": "Master's in Information Technology",
            "university": "Stanford University",
            "graduation_year": 2019
          },
          "experience": [
            {
              "company": "CloudTech Innovations",
              "role": "Software Engineer",
              "years": 3
            }
          ],
          "certifications": [
            "AWS Certified Solutions Architect",
            "Certified Django Developer"
          ],
          "total_years_experience": 5,
          "years_at_organization": 1,
          "current_status": "On Project",
          "projects": [
            {
              "project_id": 103,
              "project_name": "Project A",
              "role": "Backend Developer",
              "technologies": ["Python", "Django", "PostgreSQL"],
              "start_date": "2024-05-01",
              "end_date": "2024-09-01",
              "overall_rating": "4.7/5",
              "overall_review": "Bob was instrumental in developing the backend of the application. His skills in Python and Django helped implement scalable and efficient services. He worked effectively with the frontend team to ensure seamless API integration, though there were minor delays in task completion.",
              "review": {
                "employee_experience": "In this project, I deepened my knowledge of Python and Django by working on building a scalable backend. I contributed to API development, optimized database queries using PostgreSQL, and collaborated closely with the frontend team to ensure smooth integration. The experience helped me hone my backend development skills and adapt to Agile workflows, while also improving my ability to manage time effectively.",
                "team_member_ratings": {
                  "Alice Smith": {
                    "rating": "4/5",
                    "review": "Bob's work on the backend was excellent. His coding skills and ability to integrate with the frontend team were crucial for the success of the project."
                  },
                  "Jessica Green": {
                    "rating": "5/5",
                    "review": "Bob's expertise in Python and Django was a huge asset to this project. He managed the backend effectively and implemented features efficiently."
                  }
                },
                "manager_rating": {
                  "rating": "4.8/5",
                  "review": "Bob displayed outstanding technical knowledge, especially in Python and Django. His ability to collaborate with other teams and deliver backend solutions on time was commendable."
                },
                "comments": "Strong backend skills, team player"
              }
            }
          ]
        }
      },
      {
        "id": 3,
        "personal_details": {
          "name": "John Doe",
          "age": 35,
          "designation": "Project Manager",
          "email": "john.doe@company.com",
          "phone": "555-666-7777",
          "address": "789 Pine Road, Springfield, IL, 62703",
          "languages": ["English", "French"],
          "skills": ["Project Management", "Agile Methodology", "Client Relations", "Team Leadership", "Risk Management"]
        },
        "professional_details": {
          "education": {
            "degree": "MBA in Project Management",
            "university": "Harvard University",
            "graduation_year": 2015
          },
          "experience": [
            {
              "company": "GlobalTech Solutions",
              "role": "Project Manager",
              "years": 7
            }
          ],
          "certifications": [
            "Certified Scrum Master",
            "PMP Certification"
          ],
          "total_years_experience": 10,
          "years_at_organization": 4,
          "current_status": "On Project",
          "projects": [
            {
              "project_id": 104,
              "project_name": "Project Z",
              "role": "Project Manager",
              "technologies": ["Java", "Spring Boot", "MongoDB"],
              "start_date": "2023-06-15",
              "end_date": "2023-12-15",
              "overall_rating": "5/5",
              "overall_review": "John's leadership was critical to the success of the project. He managed the team and the client relations perfectly. His communication and project planning skills were top-notch, ensuring smooth progress throughout the project.",
              "review": {
                "employee_experience": "In managing this project, I enhanced my leadership skills and improved my ability to manage client relations effectively. I worked closely with the team, ensuring alignment with project goals, while also managing risks and keeping stakeholders informed. This experience allowed me to refine my project management and communication skills, particularly within an Agile environment.",
                "team_member_ratings": {
                  "Alice Smith": {
                    "rating": "5/5",
                    "review": "John was a great manager who kept the project on track and handled client expectations seamlessly."
                  },
                  "Bob Johnson": {
                    "rating": "5/5",
                    "review": "John’s leadership skills were excellent. He was proactive in addressing potential issues and made sure the project was completed on time."
                  }
                },
                "manager_rating": {
                  "rating": "5/5",
                  "review": "John’s leadership and planning were outstanding, ensuring the project's success and the satisfaction of all stakeholders."
                },
                "comments": "Exceptional leadership and communication skills"
              }
            }
          ]
        }
      },{
        "id": 4,
        "personal_details": {
          "name": "Emma Johnson",
          "age": 29,
          "designation": "Data Scientist",
          "email": "emma.johnson@company.com",
          "phone": "111-222-3333",
          "address": "789 Elm Street, Springfield, IL, 62704",
          "languages": ["English", "French"],
          "skills": ["Python", "Machine Learning", "TensorFlow", "Data Visualization", "SQL"]
        },
        "professional_details": {
          "education": {
            "degree": "Master's in Data Science",
            "university": "MIT",
            "graduation_year": 2018
          },
          "experience": [
            {
              "company": "AI Innovations",
              "role": "Data Scientist",
              "years": 4
            }
          ],
          "certifications": [
            "Google Professional Data Engineer",
            "IBM Data Science Professional Certificate"
          ],
          "total_years_experience": 6,
          "years_at_organization": 2,
          "current_status": "On Project",
          "projects": [
            {
              "project_id": 105,
              "project_name": "AI Predictive Model",
              "role": "Lead Data Scientist",
              "technologies": ["Python", "TensorFlow", "SQL"],
              "start_date": "2023-05-01",
              "end_date": "2023-12-01",
              "overall_rating": "4.7/5",
              "overall_review": "Emma led the data science efforts, implementing highly efficient models for predictive analytics. Her expertise in machine learning was invaluable, though she could have documented processes more thoroughly.",
              "review": {
                "employee_experience": "This project allowed me to further develop my skills in deep learning and predictive modeling. I optimized machine learning pipelines and worked with big data processing using SQL and Python. I also gained experience in working with cloud-based AI solutions.",
                "team_member_ratings": {
                  "Alice Smith": {
                    "rating": "4.5/5",
                    "review": "Emma was a key contributor to the AI models. She was proactive in suggesting improvements but could improve on documentation."
                  },
                  "Bob Johnson": {
                    "rating": "4.7/5",
                    "review": "Her ability to analyze data and implement machine learning solutions was outstanding. She could work on improving cross-team communication."
                  }
                },
                "manager_rating": {
                  "rating": "4.8/5",
                  "review": "Emma’s technical skills are impressive. Her work on predictive modeling helped shape the project’s success. More structured documentation would improve her contributions even further."
                },
                "comments": "Excellent data science expertise, minor improvements needed in documentation."
              }
            }
          ]
        }
      },
      {
        "id": 5,
        "personal_details": {
          "name": "Michael Brown",
          "age": 32,
          "designation": "DevOps Engineer",
          "email": "michael.brown@company.com",
          "phone": "444-555-6666",
          "address": "456 Birch Lane, Springfield, IL, 62705",
          "languages": ["English", "German"],
          "skills": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
        },
        "professional_details": {
          "education": {
            "degree": "Bachelor's in Information Technology",
            "university": "University of California",
            "graduation_year": 2015
          },
          "experience": [
            {
              "company": "Cloud Solutions Ltd.",
              "role": "DevOps Engineer",
              "years": 6
            }
          ],
          "certifications": [
            "AWS Certified DevOps Engineer",
            "Certified Kubernetes Administrator"
          ],
          "total_years_experience": 8,
          "years_at_organization": 2,
          "current_status": "On Project",
          "projects": [
            {
              "project_id": 106,
              "project_name": "Cloud Migration",
              "role": "Lead DevOps Engineer",
              "technologies": ["AWS", "Terraform", "Docker"],
              "start_date": "2023-02-01",
              "end_date": "2023-09-01",
              "overall_rating": "4.6/5",
              "overall_review": "Michael played a crucial role in migrating our infrastructure to the cloud. His automation expertise was vital to the project’s efficiency, though response times to urgent issues could be improved.",
              "review": {
                "employee_experience": "This project helped me sharpen my skills in cloud infrastructure management and automation. I was responsible for setting up CI/CD pipelines and ensuring seamless cloud deployment. The experience reinforced my expertise in containerization and scalability.",
                "team_member_ratings": {
                  "John Doe": {
                    "rating": "4.5/5",
                    "review": "Michael’s automation scripts saved us a lot of time. He is very skilled in DevOps but could be a bit more responsive to urgent issues."
                  },
                  "Sarah Lee": {
                    "rating": "4.6/5",
                    "review": "Michael’s contributions to cloud migration were critical. His knowledge of Kubernetes and Terraform was impressive."
                  }
                },
                "manager_rating": {
                  "rating": "4.7/5",
                  "review": "Michael showed deep expertise in DevOps. His work was crucial in improving deployment efficiency. He could work on improving response times to high-priority issues."
                },
                "comments": "Highly skilled in automation and cloud computing, minor responsiveness issues."
              }
            }
          ]
        }
      },
      {
        "id": 6,
        "personal_details": {
          "name": "Sophia Davis",
          "age": 31,
          "designation": "UI/UX Designer",
          "email": "sophia.davis@company.com",
          "phone": "777-888-9999",
          "address": "123 Cedar Drive, Springfield, IL, 62706",
          "languages": ["English", "Spanish"],
          "skills": ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"]
        },
        "professional_details": {
          "education": {
            "degree": "Bachelor's in Graphic Design",
            "university": "Parsons School of Design",
            "graduation_year": 2016
          },
          "experience": [
            {
              "company": "Creative Designs Inc.",
              "role": "UI/UX Designer",
              "years": 5
            }
          ],
          "certifications": [
            "Certified UX Designer",
            "Google UX Design Certificate"
          ],
          "total_years_experience": 7,
          "years_at_organization": 2,
          "current_status": "On Bench",
          "projects": [
            {
              "project_id": 107,
              "project_name": "E-commerce Redesign",
              "role": "Lead UI/UX Designer",
              "technologies": ["Figma", "Adobe XD"],
              "start_date": "2023-06-01",
              "end_date": "2023-12-01",
              "overall_rating": "4.5/5",
              "overall_review": "Sophia’s design work was exceptional, making the application visually appealing and user-friendly. She could have gathered user feedback more frequently during the design process.",
              "review": {
                "employee_experience": "In this project, I led the UI/UX redesign, improving the user experience and interface of an e-commerce platform. I focused on user research, wireframing, and high-fidelity prototyping. The experience helped me refine my design thinking approach.",
                "team_member_ratings": {
                  "Jessica Green": {
                    "rating": "4.7/5",
                    "review": "Sophia’s designs were outstanding. The UI is now more engaging and intuitive, though more frequent user testing would have been beneficial."
                  },
                  "Michael Brown": {
                    "rating": "4.5/5",
                    "review": "Her attention to detail in UI design was impressive. The design system she created streamlined the workflow significantly."
                  }
                },
                "manager_rating": {
                  "rating": "4.6/5",
                  "review": "Sophia’s UI/UX skills are top-notch. She transformed the app’s user experience, making it visually appealing and functional. More proactive user feedback collection would enhance future projects."
                },
                "comments": "Great design skills, could improve on integrating user feedback."
              }
            }
          ]
        }
      },{
        "id": 7,
        "personal_details": {
          "name": "Daniel Martinez",
          "age": 35,
          "designation": "Full Stack Developer",
          "email": "daniel.martinez@company.com",
          "phone": "321-654-0987",
          "address": "567 Oak Avenue, Springfield, IL, 62707",
          "languages": ["English", "Spanish"],
          "skills": ["JavaScript", "React", "Node.js", "MongoDB", "GraphQL"]
        },
        "professional_details": {
          "education": {
            "degree": "Master's in Computer Science",
            "university": "Stanford University",
            "graduation_year": 2015
          },
          "experience": [
            {
              "company": "WebTech Solutions",
              "role": "Full Stack Developer",
              "years": 6
            }
          ],
          "certifications": [
            "AWS Certified Developer",
            "React Professional Certification"
          ],
          "total_years_experience": 10,
          "years_at_organization": 3,
          "current_status": "On Project",
          "projects": [
            {
              "project_id": 108,
              "project_name": "E-Learning Platform",
              "role": "Lead Developer",
              "technologies": ["React", "Node.js", "MongoDB"],
              "start_date": "2023-03-01",
              "end_date": "2023-11-01",
              "overall_rating": "4.8/5",
              "overall_review": "Daniel played a key role in building the platform's frontend and backend, ensuring smooth functionality and performance. His expertise in JavaScript frameworks was evident, but occasional delays in bug fixes were noted.",
              "review": {
                "employee_experience": "This project gave me an opportunity to improve my full-stack development skills. I worked extensively on API development, database optimization, and React-based UI improvements. The experience deepened my knowledge of GraphQL and scalable architectures.",
                "team_member_ratings": {
                  "Emma Johnson": {
                    "rating": "4.7/5",
                    "review": "Daniel was instrumental in integrating the backend with the frontend seamlessly. There were occasional delays in bug fixes, but his overall performance was great."
                  },
                  "Jessica Green": {
                    "rating": "4.8/5",
                    "review": "His work on frontend components was exceptional, and he ensured excellent responsiveness. A great team player!"
                  }
                },
                "manager_rating": {
                  "rating": "4.9/5",
                  "review": "Daniel’s technical expertise and leadership on this project were remarkable. He delivered high-quality solutions on time, except for minor delays in debugging."
                },
                "comments": "Strong development skills, could work on speeding up bug resolution."
              }
            }
          ]
        }
      },
      {
        "id": 8,
        "personal_details": {
          "name": "Olivia Taylor",
          "age": 28,
          "designation": "Cybersecurity Analyst",
          "email": "olivia.taylor@company.com",
          "phone": "567-890-1234",
          "address": "789 Pine Street, Springfield, IL, 62708",
          "languages": ["English"],
          "skills": ["Network Security", "Penetration Testing", "SIEM", "Python", "Ethical Hacking"]
        },
        "professional_details": {
          "education": {
            "degree": "Bachelor's in Cybersecurity",
            "university": "University of Texas",
            "graduation_year": 2017
          },
          "experience": [
            {
              "company": "SecureTech",
              "role": "Cybersecurity Analyst",
              "years": 5
            }
          ],
          "certifications": [
            "Certified Ethical Hacker (CEH)",
            "CompTIA Security+"
          ],
          "total_years_experience": 6,
          "years_at_organization": 2,
          "current_status": "On Bench",
          "projects": [
            {
              "project_id": 109,
              "project_name": "Enterprise Security Enhancement",
              "role": "Security Analyst",
              "technologies": ["SIEM", "Python", "Firewalls"],
              "start_date": "2023-01-01",
              "end_date": "2023-09-01",
              "overall_rating": "4.6/5",
              "overall_review": "Olivia significantly improved security protocols, identifying vulnerabilities effectively. A bit more focus on documentation and reporting would be beneficial.",
              "review": {
                "employee_experience": "During this project, I enhanced my penetration testing skills and worked on strengthening firewall policies. I also conducted security audits and improved incident response strategies. This experience helped refine my ability to detect and mitigate cybersecurity threats.",
                "team_member_ratings": {
                  "Michael Brown": {
                    "rating": "4.5/5",
                    "review": "Olivia was excellent in identifying and mitigating vulnerabilities. A bit more attention to documentation would have been helpful."
                  },
                  "John Doe": {
                    "rating": "4.6/5",
                    "review": "She improved the overall security posture significantly. Her technical skills are outstanding."
                  }
                },
                "manager_rating": {
                  "rating": "4.7/5",
                  "review": "Olivia’s work helped strengthen enterprise security. More structured reporting would further enhance her impact."
                },
                "comments": "Great security expertise, improve documentation practices."
              }
            }
          ]
        }
      },
      {
        "id": 9,
        "personal_details": {
          "name": "Ethan Wilson",
          "age": 30,
          "designation": "Cloud Architect",
          "email": "ethan.wilson@company.com",
          "phone": "987-654-3210",
          "address": "456 Redwood Blvd, Springfield, IL, 62709",
          "languages": ["English", "French"],
          "skills": ["AWS", "Azure", "Google Cloud", "Microservices", "Terraform"]
        },
        "professional_details": {
          "education": {
            "degree": "Master's in Cloud Computing",
            "university": "Harvard University",
            "graduation_year": 2016
          },
          "experience": [
            {
              "company": "Cloud Experts Inc.",
              "role": "Cloud Architect",
              "years": 7
            }
          ],
          "certifications": [
            "AWS Certified Solutions Architect",
            "Google Cloud Professional Architect"
          ],
          "total_years_experience": 9,
          "years_at_organization": 3,
          "current_status": "On Project",
          "projects": [
            {
              "project_id": 110,
              "project_name": "Cloud Infrastructure Overhaul",
              "role": "Lead Cloud Architect",
              "technologies": ["AWS", "Terraform", "Kubernetes"],
              "start_date": "2023-04-01",
              "end_date": "2023-12-01",
              "overall_rating": "4.7/5",
              "overall_review": "Ethan led the cloud migration and optimization efforts effectively. His deep knowledge of cloud platforms was crucial, though team coordination could be improved.",
              "review": {
                "employee_experience": "This project enabled me to refine my expertise in cloud infrastructure and scalability. I designed and deployed microservices architectures, ensuring high availability and security. I also worked on cost optimization strategies to make the infrastructure more efficient.",
                "team_member_ratings": {
                  "Sarah Lee": {
                    "rating": "4.7/5",
                    "review": "Ethan’s cloud expertise was invaluable. He could have been a bit more involved in team discussions."
                  },
                  "Bob Johnson": {
                    "rating": "4.8/5",
                    "review": "His microservices and cloud optimization skills are top-tier. Overall, a great asset to the project!"
                  }
                },
                "manager_rating": {
                  "rating": "4.9/5",
                  "review": "Ethan displayed outstanding leadership and technical skills in this project. Improving team engagement would make him even more effective."
                },
                "comments": "Exceptional cloud architect, could improve in team interactions."
              }
            }
          ]
        }
      },{
        "id": 10,
        "personal_details": {
          "name": "Sophia Anderson",
          "age": 29,
          "designation": "Data Scientist",
          "email": "sophia.anderson@company.com",
          "phone": "456-789-0123",
          "address": "789 Birch Lane, Springfield, IL, 62710",
          "languages": ["English", "French"],
          "skills": ["Python", "Machine Learning", "TensorFlow", "SQL", "Data Visualization"]
        },
        "professional_details": {
          "education": {
            "degree": "Master's in Data Science",
            "university": "MIT",
            "graduation_year": 2018
          },
          "experience": [
            {
              "company": "AI Analytics Ltd.",
              "role": "Data Scientist",
              "years": 6
            }
          ],
          "certifications": [
            "TensorFlow Developer Certificate",
            "Certified Data Scientist"
          ],
          "total_years_experience": 7,
          "years_at_organization": 2,
          "current_status": "On Project",
          "projects": [
            {
              "project_id": 110,
              "project_name": "AI-Based Predictive Analysis",
              "role": "Lead Data Scientist",
              "technologies": ["Python", "TensorFlow", "SQL"],
              "start_date": "2023-02-01",
              "end_date": "2023-06-01",
              "overall_rating": "4.7/5",
              "overall_review": "Sophia was key in building predictive models with high accuracy. Her expertise in machine learning helped the team solve complex problems efficiently.",
              "review": {
                "employee_experience": "I worked on developing and optimizing predictive models using TensorFlow. I focused on data preprocessing, feature engineering, and fine-tuning ML models for better performance. It was an enriching experience, improving my knowledge of deep learning techniques.",
                "team_member_ratings": {
                  "Liam Brown": {
                    "rating": "5/5",
                    "review": "Sophia's technical skills were outstanding, and she significantly contributed to the project's success."
                  },
                  "Emma Wilson": {
                    "rating": "4.5/5",
                    "review": "Sophia was proactive and delivered quality work, though communication within the team could have been better."
                  }
                },
                "manager_rating": {
                  "rating": "4.8/5",
                  "review": "Sophia demonstrated great technical ability and problem-solving skills throughout the project."
                },
                "comments": "Excellent ML expertise, minor improvements needed in team communication."
              }
            }
          ]
        }
      },
      {
        "id": 11,
        "personal_details": {
          "name": "Michael Carter",
          "age": 34,
          "designation": "DevOps Engineer",
          "email": "michael.carter@company.com",
          "phone": "654-321-0987",
          "address": "321 Cedar Street, Springfield, IL, 62711",
          "languages": ["English", "German"],
          "skills": ["AWS", "Kubernetes", "Docker", "CI/CD", "Terraform"]
        },
        "professional_details": {
          "education": {
            "degree": "Bachelor's in Information Technology",
            "university": "Stanford University",
            "graduation_year": 2015
          },
          "experience": [
            {
              "company": "CloudOps Solutions",
              "role": "DevOps Engineer",
              "years": 9
            }
          ],
          "certifications": [
            "AWS Certified DevOps Engineer",
            "Kubernetes Administrator Certification"
          ],
          "total_years_experience": 10,
          "years_at_organization": 3,
          "current_status": "On Project",
          "projects": [
            {
              "project_id": 111,
              "project_name": "Cloud Infrastructure Automation",
              "role": "DevOps Engineer",
              "technologies": ["AWS", "Terraform", "Kubernetes"],
              "start_date": "2023-05-01",
              "end_date": "2023-10-01",
              "overall_rating": "4.6/5",
              "overall_review": "Michael optimized the CI/CD pipelines and automated infrastructure deployment, leading to faster release cycles and improved system reliability.",
              "review": {
                "employee_experience": "This project allowed me to enhance my automation skills using Terraform and Kubernetes. I focused on optimizing the CI/CD pipeline, reducing deployment times, and ensuring high system availability.",
                "team_member_ratings": {
                  "David White": {
                    "rating": "4.7/5",
                    "review": "Michael's expertise in cloud automation was invaluable in ensuring a smooth deployment process."
                  },
                  "Sophia Anderson": {
                    "rating": "4.5/5",
                    "review": "Michael was efficient and proactive, although there were minor challenges in cross-team collaboration."
                  }
                },
                "manager_rating": {
                  "rating": "4.7/5",
                  "review": "Michael played a crucial role in automating cloud infrastructure, enhancing the organization's cloud efficiency."
                },
                "comments": "Great problem-solving skills and efficiency, but could improve documentation practices."
              }
            }
          ]
        }
      },
      {
        "id": 12,
        "personal_details": {
          "name": "Emma Wilson",
          "age": 32,
          "designation": "UI/UX Designer",
          "email": "emma.wilson@company.com",
          "phone": "789-012-3456",
          "address": "567 Willow Avenue, Springfield, IL, 62712",
          "languages": ["English", "Spanish"],
          "skills": ["Figma", "Adobe XD", "CSS", "User Research", "Wireframing"]
        },
        "professional_details": {
          "education": {
            "degree": "Bachelor's in Graphic Design",
            "university": "University of California",
            "graduation_year": 2014
          },
          "experience": [
            {
              "company": "Creative UX Studio",
              "role": "UI/UX Designer",
              "years": 8
            }
          ],
          "certifications": [
            "Certified UX Designer",
            "Google UX Design Certification"
          ],
          "total_years_experience": 9,
          "years_at_organization": 4,
          "current_status": "On Bench",
          "projects": [
            {
              "project_id": 112,
              "project_name": "E-Commerce Redesign",
              "role": "Lead UI/UX Designer",
              "technologies": ["Figma", "Adobe XD", "CSS"],
              "start_date": "2023-03-01",
              "end_date": "2023-07-01",
              "overall_rating": "4.8/5",
              "overall_review": "Emma delivered a modern, user-friendly design, improving the overall user experience and customer engagement.",
              "review": {
                "employee_experience": "This project provided me with an opportunity to conduct extensive user research and improve the design aesthetics of an e-commerce platform. I worked on wireframes, prototypes, and UI enhancements, significantly improving usability.",
                "team_member_ratings": {
                  "Michael Carter": {
                    "rating": "4.7/5",
                    "review": "Emma's attention to detail and user-focused approach made the project a success."
                  },
                  "Sophia Anderson": {
                    "rating": "4.8/5",
                    "review": "Emma's designs were intuitive and elegant, but there were minor delays in some iterations."
                  }
                },
                "manager_rating": {
                  "rating": "4.9/5",
                  "review": "Emma's creativity and ability to align designs with user needs were outstanding."
                },
                "comments": "Highly creative and user-focused, with slight room for improving turnaround times."
              }
            }
          ]
        }
      }
      
      
      
    ]
 ;
 module.exports={
  employees
  }; 
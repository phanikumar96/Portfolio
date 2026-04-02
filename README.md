# Portfolio

THE portfolio is not looking good abd sa shwon in teh image it hve to more inetractive and add complete data %----------------------------------------------------------------------------------------
%   ATS-FRIENDLY PROFESSIONAL RESUME (Bhagya Format for Patents/Pubs + Hyperlinks)
%----------------------------------------------------------------------------------------
\documentclass[a4paper,10pt]{article}

% --- PACKAGES ---
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{lmodern}            
\usepackage[scale=0.9, top=0.6in, bottom=0.6in, left=0.6in, right=0.6in]{geometry}
\usepackage{titlesec}           
\usepackage{enumitem}           
\usepackage{fontawesome5}       
\usepackage{hyperref}           
\usepackage{xcolor}             

% --- ATS OPTIMIZATION ---
\input{glyphtounicode}
\pdfgentounicode=1

% --- BHAGYA FORMAT LIST DEFS ---
\newlist{publist}{enumerate}{1}
\setlist[publist]{label={[\arabic*]}, leftmargin=2em, nosep, itemsep=5pt}

% --- VISUAL STYLING ---
\definecolor{darkblue}{RGB}{0,0,139}
\hypersetup{
    colorlinks=true,
    linkcolor=darkblue,
    filecolor=darkblue,
    urlcolor=darkblue,
}

% Section Headers
\titleformat{\section}{\Large\bfseries\uppercase}{}{0em}{}[\titlerule]
\titlespacing{\section}{0pt}{12pt}{6pt}

% Bullet Lists
\setlist[itemize]{leftmargin=1.2em, label=\small\textbullet, nosep, itemsep=2pt}

%----------------------------------------------------------------------------------------
%   BEGIN DOCUMENT
%----------------------------------------------------------------------------------------
\begin{document}
\pagestyle{empty}

% --- HEADER ---
\begin{center}
    {\Huge \textbf{Dr. Phani Siginamsetty}} \\[5pt]
    \small
    \href{mailto:siginamsettyphani@gmail.com}{\faEnvelope\ siginamsettyphani@gmail.com} \ $|$ \ 
    \href{tel:+918125636250}{\faMobile\ +91-8125636250} \ $|$ \ 
    \href{https://linkedin.com/in/phani-kumar-630613101}{\faLinkedin\ LinkedIn} \ $|$ \ 
    \href{https://github.com/phanikumar96}{\faGithub\ GitHub} \ $|$ \ 
    \href{https://scholar.google.com/citations?user=mvFV_Edq61oC&hl=en}{\faGraduationCap\ Google Scholar} \ $|$ \ 
    \href{https://funnyphani.github.io/Phani_Siginamsetty.github.io/}{\faGlobe\ Portfolio}
\end{center}

% --- PROFESSIONAL SUMMARY ---
\section{Professional Summary}
{\small Associate Data Scientist and PhD Researcher specializing in Generative AI, Machine Learning, and autonomous Multi-Agent Systems. Proven track record of bridging academic research with high-impact enterprise solutions, focusing on orchestration frameworks where autonomous agents execute complex workflows. Deep expertise in end-to-end LLM lifecycle management, including RAG pipelines, fine-tuning (PEFT/LoRA), and quantized edge deployment.}

% --- TECHNICAL SKILLS ---
\section{Technical Skills}
\begin{itemize}[leftmargin=0.15in, itemsep=1pt, topsep=2pt]
    \footnotesize % Reduced font for better scannability
    \item \textbf{GenAI \& Agentic Frameworks:} Multi-Agent Orchestration (CrewAI, AutoGen, LangGraph, Agno), PydanticAI, Haystack, Tool-Function Calling, Semantic Routing, HITL, Evaluation (Ragas, TruLens).
    
    \item \textbf{LLMs \& Model Engineering:} AWS Bedrock, Llama 3.2, GPT-4o, Fine-Tuning (PEFT, QLoRA), Unsloth, Hugging Face TRL (DPO/RLHF), DeepSpeed, FSDP, Model Quantization (GGUF, AWQ, GPTQ).
    
    \item \textbf{Data Science \& Advanced ML:} PyTorch, Scikit-Learn, Reinforcement Learning (PPO, DQN), Time-Series, XGBoost, Random Forest, Siamese Networks, AutoML, Quantum-Motivated Algorithms.
    
    \item \textbf{Vision \& Multimodal AI:} Multimodal RAG, OpenCV, AWS Textract (OCR), Document Intelligence, OpenAI Whisper (ASR), ElevenLabs (TTS), CLIP, Image \& Audio Processing.
    
    \item \textbf{MLOps, Cloud \& Backend:} Python (Expert), AWS (SageMaker, Bedrock, Lambda, EC2), Docker, Kubernetes, CI/CD, Git, FastAPI, Flask, RESTful APIs, JWT/RBAC, Optuna.
    
    \item \textbf{Data Infrastructure:} Vector DBs (Pinecone, Milvus, Weaviate, Chroma, FAISS), PostgreSQL, MongoDB, Spark, Pandas, NumPy, Parquet, Data Encryption.
\end{itemize}


% --- WORK EXPERIENCE ---
\section{Work Experience}
\small % Base font for Company and Role headers

\noindent \textbf{Hexaware Technologies} \hfill Chennai, India \\
\textit{Associate Data Scientist} \hfill \textit{March 2025 -- Present}
\begin{itemize}[leftmargin=0.2in, itemsep=1pt, topsep=2pt]
    \footnotesize % Reduced font for descriptions
    \item \textbf{Autonomous Fraud Detection:} Spearheading real-time fraud detection using stateful multi-agent systems via the \textbf{Agno} framework with advanced tool-calling for complex transaction analysis.
    \item \textbf{Advanced RAG Pipelines:} Engineering a multi-agent RAG pipeline for "Smart Tutor" using vector databases and semantic routing to deliver personalized content while minimizing hallucinations.
    \item \textbf{Enterprise Automation:} Designing agentic workflows with LangChain and LangGraph to automate reporting with Human-in-the-Loop (HITL) mechanisms, reducing operational overhead.
\end{itemize}

\vspace{3pt}

\noindent \textbf{Volvo Group} \hfill Bangalore, India \\
\textit{Research Assistant} \hfill \textit{June 2024 -- March 2025}
\begin{itemize}[leftmargin=0.2in, itemsep=1pt, topsep=2pt]
    \footnotesize
    \item \textbf{Edge GenAI \& Quantization:} Researched lightweight LLMs for on-device inference using GGUF/AWQ quantization to reduce memory footprint and latency on vehicular hardware.
    \item \textbf{Computer Vision Diagnostics:} Deployed an optimized CNN pipeline for real-time component recognition within the Vehicle Configuration Manager (VCM) to automate visual inspections.
\end{itemize}

\vspace{3pt}

\noindent \textbf{SRM University AP} \hfill Amaravati, India \\
\textit{Data Science Researcher (PhD Scholar)} \hfill \textit{Sep 2021 -- July 2024}
\begin{itemize}[leftmargin=0.2in, itemsep=1pt, topsep=2pt]
    \footnotesize
    \item \textbf{Healthcare AI Consultant:} Architected a secure RAG chatbot for SRM Global Hospital to retrieve medical protocols while ensuring strict data privacy and proprietary data embedding.
    \item \textbf{Audio Intelligence:} Engineered a MoM automation API using \textbf{FastAPI}, STT, and speaker diarization to autonomously extract abstractive summaries and action items from recordings.
    \item \textbf{Multilingual NLP:} Developed MATSFT and MMSFT frameworks by fine-tuning mT5 for low-resource Indian languages, resulting in multiple high-impact journal publications.
    \item \textbf{Quantum AI \& IP:} Architected quantum-motivated summarization processors for data compression, leading to multiple Indian Patents, including \textbf{1 Granted Patent}.
\end{itemize}

\vspace{3pt}

\noindent \textbf{Tychee Innovations} \hfill Andhra Pradesh, India \\
\textit{Trainee Engineer (ML Research)} \hfill \textit{Aug 2020 -- Jul 2021}
\begin{itemize}[leftmargin=0.2in, itemsep=1pt, topsep=2pt]
    \footnotesize
    \item \textbf{Industrial Safety Vision:} Deployed real-time object detection to monitor hazardous machinery, triggering emergency stops via spatial tracking of hand proximity to danger zones.
    \item \textbf{Predictive Analytics:} Developed ML models to forecast patient outcomes and translate clinical data into actionable insights for data-driven healthcare decisions.
\end{itemize}

\vspace{3pt}

\noindent \textbf{Dhanekula Engineering College} \hfill Andhra Pradesh, India \\
\textit{Assistant Professor} \hfill \textit{Oct 2020 -- Aug 2021}
\begin{itemize}[leftmargin=0.2in, itemsep=1pt, topsep=2pt]
    \footnotesize
    \item \textbf{Software Mentorship:} Instructed Data Structures, Algorithms, and Python, mentoring students in software engineering best practices and technical problem-solving.
\end{itemize}


% --- Key Projects ---
\section{Key Projects}
\small % Base font for Project Titles

\noindent \textbf{SmartTutor: Multimodal RAG Learning Platform} \hfill \textit{FastAPI, AWS Bedrock, Pinecone, AWS Polly}
\begin{itemize}[leftmargin=0.2in, itemsep=1pt, topsep=2pt]
    \footnotesize % Reduced font for descriptions
    \item \textbf{Multimodal Ingestion Engine:} Architected an advanced RAG pipeline parsing unstructured text, complex PDFs, and diagrams using AWS Bedrock (Nova Pro \& Claude 3.5) for curriculum-aligned content generation.
    \item \textbf{Context-Aware Retrieval:} Orchestrated a scalable vector search architecture using Pinecone with semantic routing and hybrid search (dense + sparse) to drastically reduce retrieval latency.
    \item \textbf{Interactive Agentic Loop:} Engineered an autonomous, stateful assessment agent that adapts to student performance with real-time TTS auditory feedback via AWS Polly.
\end{itemize}

\vspace{3pt}

\noindent \textbf{Enterprise Fraud Prevention System (Citi Bank)} \hfill \textit{Python, Scikit-Learn, Multi-Agent Orchestration, AWS}
\begin{itemize}[leftmargin=0.2in, itemsep=1pt, topsep=2pt]
    \footnotesize
    \item \textbf{Hybrid Risk Intelligence:} Spearheaded a dual-layered risk engine fusing statistical anomaly detection (XGBoost) with GenAI-driven forensics, reducing investigation time and false positives.
    \item \textbf{Autonomous Rule Discovery:} Innovated a multi-agent workflow for live transaction monitoring, utilizing tool-calling to detect zero-day fraud patterns with Human-in-the-Loop oversight.
    \item \textbf{Secure Data Parsing Agent:} Designed "Argus," an AI Data Analyst using \texttt{msoffcrypto} to securely decrypt and parse sensitive financial datasets locally for evidence-based risk verdicts.
\end{itemize}

\vspace{3pt}

\noindent \textbf{Automated Bank Cheque Verification System} \hfill \textit{Computer Vision, PyTorch, AWS Textract, OpenCV}
\begin{itemize}[leftmargin=0.2in, itemsep=1pt, topsep=2pt]
    \footnotesize
    \item \textbf{Forensic Digitization Pipeline:} Constructed an end-to-end vision pipeline using AWS Textract and OpenCV for layout analysis and digitization of MICR codes and payee details with high OCR accuracy.
    \item \textbf{Signature Verification:} Engineered a PyTorch-based Siamese Neural Network for one-shot learning, utilizing contrastive loss and feature embeddings to detect sophisticated forged signatures.
    \item \textbf{Cross-Modal Logic:} Programmed NLP algorithms to cross-verify extracted semantic data (e.g., matching numeric amounts against written text) to flag discrepancies for manual review.
\end{itemize}

\vspace{3pt}

\noindent \textbf{Personalized Medical AI Assistant} \hfill \textit{Llama 3, Agno, LangGraph, FastAPI, MongoDB}
\begin{itemize}[leftmargin=0.2in, itemsep=1pt, topsep=2pt]
    \footnotesize
    \item \textbf{Clinical Guardrails \& RAG:} Engineered a domain-specific agent using Llama 3 and Vector DBs, implementing query expansion and re-ranking to ground answers exclusively in verified medical literature.
    \item \textbf{Stateful Memory Architecture:} Developed a persistent context-retention engine using LangGraph and MongoDB to map longitudinal symptoms and medical history for personalized health insights.
\end{itemize}


\section{Education}
\small % Reduces overall font size for this section

\noindent \textbf{Ph.D. in Computer Science \& Engineering} \hfill 2021 -- 2025 \\
SRM University AP \hfill \textit{CGPA: 9.25/10.0}

\vspace{5pt}

\noindent \textbf{M.Tech in Computer Science \& Engineering} \hfill 2018 -- 2020 \\
KL University \hfill \textit{CGPA: 8.5/10.0}

\vspace{5pt}

\noindent \textbf{B.Tech in Computer Science \& Engineering} \hfill 2014 -- 2018 \\
JNTUK \hfill \textit{81.0\%}

\vspace{5pt}

\noindent \textbf{Intermediate (MPC)} \hfill 2012 -- 2014 \\
Board of Intermediate Education \hfill \textit{91.70\%}

\vspace{5pt}

\noindent \textbf{SSC (10th Standard)} \hfill 2011 -- 2012 \\
Board of Secondary Education \hfill \textit{GPA: 9.3/10.0}



\section{Patents}
\begin{itemize}[leftmargin=*, itemsep=6pt]
    \item System and a method for automated exam evaluation and personalized learning feedback \\
    \footnotesize Indian Patent No: 202541018210 $|$ \textit{Indian Patent Journal}, 2025
    
    \item A System and a Method for Managing API Calls in A Large Language Model \\
    \footnotesize Indian Patent No: 202441096836 $|$ \textit{Indian Patent Journal}, 2024
    
    \item A System and a Method for Healthcare Data Processing and Decision Support \\
    \footnotesize Indian Patent No: 202441076761 $|$ \textit{Indian Patent Journal}, 2024

    \item System and method for multilingual fake news detection in multimodal information \\
    \footnotesize Indian Patent No: 202441030030 $|$ \textit{Indian Patent Journal}, 2024

    \item A Healthcare Summarization System and A Method Thereof \\
    \footnotesize Indian Patent No: 202441005845 $|$ \textit{Indian Patent Journal}, 2024

    \item A System and a Method for Personalized E-Content Generation Based on Student Performance \\
    \footnotesize Indian Patent No: 202441003347 $|$ \textit{Indian Patent Journal}, 2024

    \item System and method for deriving multilingual meeting minutes \\
    \footnotesize Indian Patent No: 202441001022 $|$ \textbf{Grant No: 581292} $|$ \textit{Indian Patent Journal}, 2024

    \item System and method for multimodal multilingual input summarization using quantum motivated processors \\
    \footnotesize Indian Patent No: 202341005519 $|$ \textbf{Grant No: 66614} $|$ \textit{Indian Patent Journal}, 2023

    \item A System and A Method for Generating Trading Coupons \\
    \footnotesize Indian Patent No: 202341007665 $|$ \textit{Indian Patent Journal}, 2023

    \item A System and A Method for Prediction of The Strength of Concrete \\
    \footnotesize Indian Patent No: 202341007257 $|$ \textbf{Grant No: 582851} $|$ \textit{Indian Patent Journal}, 2023

    \item A System and Method for Performing Multilingual Multimodal Summarization \\
    \footnotesize Indian Patent No: 202241073648 $|$ \textit{Indian Patent Journal}, 2022
\end{itemize}


\section{Publications}
\begin{itemize}[leftmargin=*, itemsep=8pt]
    \item MATSFT: User query-based multilingual abstractive text summarization for low resource Indian languages by fine-tuning mT5 \\
    \footnotesize \textbf{Phani, S.}, et al. $|$ \textit{Alexandria Engineering Journal}, Elsevier, 2025. \href{https://doi.org/10.1016/j.aej.2025.04.031}{DOI: 10.1016/j.aej.2025.04.031}

    \item Improving Preliminary Clinical Diagnosis Accuracy through Knowledge Filtering Techniques in Consultation Dialogues \\
    \footnotesize Abdul, A., \textbf{Phani, S.}, et al. $|$ \textit{Computer Methods and Programs in Biomedicine}, Elsevier, 2024. \href{https://doi.org/10.1016/j.cmpb.2024.108051}{DOI: 10.1016/j.cmpb.2024.108051}

    \item MMSFT: Multilingual Multimodal Summarization by Fine-tuning Transformers \\
    \footnotesize \textbf{Phani, S.}, et al. $|$ \textit{IEEE Access}, 2024. \href{https://doi.org/10.1109/ACCESS.2024.3454382}{DOI: 10.1109/ACCESS.2024.3454382}

    \item MMSML: Multilingual Multimodal Summarization for Multimodal Input \\
    \footnotesize \textbf{Phani, S.}, et al. $|$ \textit{Intl. Conference on Data Science and Applications}, Springer, 2024. \href{https://doi.org/10.1007/978-981-96-2724-0_5}{DOI: 10.1007/978-981-96-2724-0\_5}

    \item Recognition for Attendance System Using Reinforcement Learning \\
    \footnotesize \textbf{Phani, S.}, et al. $|$ \textit{FICTA}, Springer, 2023. \href{https://doi.org/10.1007/978-981-99-6702-5_15}{DOI: 10.1007/978-981-99-6702-5\_15}

    \item Abstractive Text Summarization with Fine-Tuned Transformer \\
    \footnotesize \textbf{Phani, S.}, et al. $|$ \textit{MAI 2022}, Springer, 2023. \href{https://doi.org/10.1007/978-981-99-0189-0_46}{DOI: 10.1007/978-981-99-0189-0\_46}

    \item Machine Learning Classifiers and Along with TPOT Classifier (AutoML) to Predict the Readmission Patterns of Diabetic Patients \\
    \footnotesize \textbf{Phani, S.}, et al. $|$ \textit{IJRTE}, 2020. \href{https://doi.org/10.35940/ijrte.f7415.059120}{DOI: 10.35940/ijrte.f7415.059120}
\end{itemize}


\end{document}

from teh latex and dpf have to well rendere and portfolio have to be well frmatted and Open to Opportunities do notr present this and proftfolio gave to well fromatted and food reperisen tioz

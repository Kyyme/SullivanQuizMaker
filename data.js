const quizData = [
    {
        id: 1,
        stem: "A patient has undergone surgery and subsequent immobilization to stabilize the olecranon process. The patient now exhibits an elbow flexion contracture. In this case, an absolute CONTRAINDICATION for joint mobilization would be:",
        options: {
            A: "Empty end-feel",
            B: "Soft end-feel",
            C: "Springy end-feel",
            D: "Firm end-feel"
        },
        correct: "A",
        correctRationale: "An empty end-feel (no real end-feel) may be indicative of severe pain and muscle guarding associated with pathological conditions.",
        incorrectRationale: "Springy and firm end-feels may be expected after elbow surgery. Soft end-feel is an indication of range limitation because of tissue compression (e.g., in knee flexion, there is contact between the posterior leg and the posterior thigh). None of these is a contraindication for mobilization."
    },
    {
        id: 2,
        stem: "A PT is instructing a student in proper positioning to prevent the typical contractures in a patient with a transfemoral amputation. The PT stresses positioning the patient in:",
        options: {
            A: "Side-lying on the residual limb",
            B: "A wheelchair with a gel cushion and adductor roll",
            C: "Prone-lying with the residual limb in neutral rotation",
            D: "Supine-lying with the residual limb resting on a small pillow"
        },
        correct: "C",
        correctRationale: "The typical contractures with a transfemoral amputation are hip flexion (typically from too much sitting in a wheelchair). The residual limb also rolls out into abduction and external rotation. When in bed, hip extension should be emphasized (e.g., prone-lying). When sitting in the wheelchair, neutral hip rotation should be emphasized (e.g., using an abductor roll). Time in extension (prone, supine, or standing) should counterbalance time sitting in a wheelchair.",
        incorrectRationale: "Resting in supine with the residual limb resting on a small pillow in a position of hip flexion is contraindicated, as is an adductor roll in wheelchair sitting. Side-lying on a residual limb has no benefit for this patient, and may also position the hip in flexion."
    },
    {
        id: 3,
        stem: "In treating a patient with a diagnosis of right shoulder impingement syndrome, the FIRST intervention the PT should consider is to:",
        options: {
            A: "Instruct the patient in proper postural alignment",
            B: "Complete AROM in all shoulder motions",
            C: "Implement a stretching program for the shoulder girdle musculature",
            D: "Modulate all pain"
        },
        correct: "A",
        correctRationale: "Without regaining normal postural alignment and scapular-humeral rhythm, the patient will continue to impinge the supraspinatus and/or biceps tendon at the acromion and never regain normal function of the shoulder.",
        incorrectRationale: "It is unlikely that all pain would be controlled. Appropriate AROM exercises and/or stretching could be the focus after posture has been corrected."
    },
    {
        id: 4,
        stem: "A patient with Parkinson's disease (PD) demonstrates a highly stereotyped gait pattern characterized by impoverished movement and a festinating gait. The intervention that would be MOST beneficial to use with this patient is:",
        options: {
            A: "Locomotor training using a motorized treadmill and body weight support harness",
            B: "Braiding with light touch-down support of hands",
            C: "Standing and reaching with a body weight support harness",
            D: "Locomotor training using a rolling walker"
        },
        correct: "A",
        correctRationale: "The patient with PD typically presents with postural deficits of forward head and trunk, with hip and knee flexion contractures. Gait is narrow-based and shuffling. A festinating gait typically results from persistent forward posturing of the body near the forward limits of stability. Task-specific training using body weight support and treadmill training (BWSTT) is the best choice.",
        incorrectRationale: "A rolling walker is contraindicated because it would increase forward postural deformities and festinating gait. Braiding is a complex gait activity that most likely exceeds this patient's abilities. Standing and reaching with body weight support is an important lead-up activity."
    },
    {
        id: 5,
        stem: "A patient is experiencing sensory changes secondary to left CVA. Upon testing, the patient is unable to detect pin prick or temperature in the right hand, leading to disuse and increased safety risk. These changes are BEST documented as 'Patient is experiencing':",
        options: {
            A: "Allodynia",
            B: "Abarognosis",
            C: "Anesthesia",
            D: "Analgesia"
        },
        correct: "D",
        correctRationale: "Analgesia refers to a complete loss of pain sensibility (in this case).",
        incorrectRationale: "Anesthesia is a more global term referring to loss of sensation. Abarognosis refers to an inability to recognize weight. Allodynia refers to pain produced by a non-noxious stimulus (e.g., light touch)."
    },
    {
        id: 6,
        stem: "A patient is on the cardiac unit following admission for CHF and a history of an MI. The patient is currently compensated by pharmacological management and is comfortable, alert and oriented at rest with a normal HR and BP. The telemetric ECG depicts the rhythm shown in the figure. The PT's appropriate interpretation and action is:",
        options: {
            A: "ST segment depression; alert emergency medical personnel",
            B: "Ventricular tachycardia; alert emergency medical personnel",
            C: "Normal sinus rhythm; continue to monitor during activity progression",
            D: "ST segment depression; check medical record for baseline ECG"
        },
        correct: "D",
        correctRationale: "The ECG shows ST segment depression. If ST segment depression is present during comfortable, stable rest in a patient with a history of an MI, it likely represents the presence of a nontransmural MI and is the patient's baseline ECG. However, this should be confirmed to rule out silent ischemia.",
        incorrectRationale: "This is not normal sinus rhythm, or ventricular tachycardia. ST segment depression alone is not an indication to alert emergency medical personnel."
    },
    {
        id: 7,
        stem: "A 14-year-old girl complains of subpatellar pain after participation in an aerobic exercise program for 2 weeks. The PT's examination shows a large Q angle, pain with palpation at the inferior pole of the patella and mild swelling at both knees. The BEST intervention for this situation is:",
        options: {
            A: "Hamstring strengthening",
            B: "Vastus medialis (VM) muscle strengthening",
            C: "Vastus lateralis (VL) strengthening",
            D: "Taping to increase lateral patellar tracking"
        },
        correct: "B",
        correctRationale: "Q angles of greater than 15° could be indicative of abnormal lateral patellar tracking. VM muscle strengthening can reduce the tendency for the patella to track laterally.",
        incorrectRationale: "VL strengthening can promote greater lateral patellar tracking and further irritation of the patellofemoral joint. VL strengthening may promote an outward pull or dislocation of the patella. Hamstring strengthening does not directly affect tracking of the patella. In the closed chain, problems at the hip or foot can also contribute to patellofemoral pain syndrome. Taping to increase lateral patellar tracking will exacerbate the problem."
    },
    {
        id: 8,
        stem: "A patient is referred to a physical therapist with a diagnosis of Bell's palsy. Which cluster of examination findings below would the PT expect to find?",
        options: {
            A: "Decreased sensation to the forehead, cheek and jaw; absence of a gag reflex; and deviation of the tongue to one side",
            B: "Ptosis, weakness in the temporalis and masseter muscles and deviation of the tongue to one side",
            C: "Ptosis, decreased abduction of the eye and excessive tearing",
            D: "Decreased closure of one eye, drooping of the mouth, and inability to raise the eyebrow"
        },
        correct: "D",
        correctRationale: "Decreased function of the facial nerve (cranial nerve VII) is associated with motor weakness of the muscles of facial expression, which could result in a decreased ability to close the eye tightly, raise the eyebrow, and raise the corner of the mouth as in a smile. Other functions of the facial nerve include taste to the anterior tongue, tearing, salivation, and dampening sound.",
        incorrectRationale: "Ptosis is related to decreased function in the oculomotor nerve (CN III). Motor function to the muscle of mastication and sensation to the face are functions of the trigeminal nerve (CN V). Motor function of the tongue is a function of the hypoglossal nerve (CN XII). The gag reflex is a function of the glossopharyngeal (CN IX) and vagus (CN X) nerves. Abduction of the eye is a function of the abducens nerve (CN VI)."
    },
    {
        id: 9,
        stem: "The cardiac rehabilitation team is conducting education classes for a group of patients. The focus is on risk factor reduction and successful lifestyle modification. A participant asks the PT to help interpret cholesterol findings. Total cholesterol is 220 mg/dL, high-density lipoprotein (HDL) cholesterol is 24 mg/dL and low-density lipoprotein (LDL) is 160 mg/dL. Analysis of these values reveals:",
        options: {
            A: "The levels of HDL, LDL and total cholesterol are all abnormally low",
            B: "LDL and HDL cholesterol levels are within normal limits, and total cholesterol should be below 200 mg/dL",
            C: "The levels of HDL, LDL and total cholesterol are all abnormally high",
            D: "The levels of LDL and total cholesterol are abnormally high, and HDL is abnormally low"
        },
        correct: "D",
        correctRationale: "Increased total blood cholesterol levels (> 200 mg/dL) and levels of LDLs (>130 mg/dL) increase the risk of coronary artery disease (CAD); conversely, low concentrations of HDLs (<40 mg/dL for men and <50mg/dL for women) are also harmful. The link between CAD and triglycerides is not as clear.",
        incorrectRationale: "The other choices are not accurately interpreted. In choice 1, the HDL is abnormally low, not high. In choices 2, neither the LDL nor the HDL is within normal limits. In choice 3, the LDL and total cholesterol are abnormally high, not low."
    },
    {
        id: 10,
        stem: "An elderly patient is being treated for depression following the death of her husband. She is currently taking a tricyclic antidepressant medication (amitriptyline) and has a recent history of a fall. The PT suspects the precipitating cause of the fall is the medication because it can cause:",
        options: {
            A: "Hyperalertness",
            B: "Postural hypotension",
            C: "Dyspnea",
            D: "Hypertension"
        },
        correct: "B",
        correctRationale: "Most tricyclic antidepressants have significant anticholinergic and sedative properties and may cause lethargy, sedation, arrhythmias, hypotension and blurred vision, thus increasing fall risk. The elderly are particularly susceptible to adverse drug effects because of a multitude of factors.",
        incorrectRationale: "Hypertension, tachycardia and convulsions can result when tricyclic antidepressants are used in combination with monoamine oxidase (MAO) inhibitors. Hyperalertness and dyspnea are not expected adverse reactions/side effects of this medication."
    },
    {
        id: 11,
        stem: "As the result of blunt trauma to the quadriceps femoris muscle, a patient experiences loss of knee function. The BEST choice for early physical therapy intervention is:",
        options: {
            A: "Gentle AROM exercises in weight bearing",
            B: "Aggressive soft tissue stretching to remove blood that has accumulated in soft tissues",
            C: "Aggressive open-chain strengthening of the quadriceps femoris to regain normal lower extremity strength",
            D: "Gentle PROM exercises in non-weight bearing to regain normal knee motion"
        },
        correct: "A",
        correctRationale: "Gentle weight-bearing AROM exercises to patient's tolerance will minimize the chance of myositis ossificans and promote improved function.",
        incorrectRationale: "Aggressive soft tissue stretching and strengthening can promote myositis ossificans. Gentle PROM exercises in a non-weight-bearing position is not likely to maintain knee function as well as AROM and weight bearing."
    },
    {
        id: 12,
        stem: "A patient with active tuberculosis (TB) is referred for physical therapy. The patient has been hospitalized and on appropriate antituberculin drugs for 3 weeks. During treatment, what precautions should the therapist observe?",
        options: {
            A: "The patient must be treated in a private, negative-pressured room",
            B: "The therapist must wear personal protective equipment at all times",
            C: "The patient can be treated in the PT gym, without precautions",
            D: "The patient must wear a tight-fitting mask at all times"
        },
        correct: "C",
        correctRationale: "Primary disease lasts approximately 10 days to 2 weeks. Two weeks on appropriate antituberculin drugs renders the host noninfectious. The patient can be safely treated in the PT gym without precautions. Medication is taken for prolonged periods (9-12 months).",
        incorrectRationale: "When the patient is diagnosed with active primary TB, the patient should be in a private, negative-pressured room. The room is considered a potentially infective environment. The therapist should observe all standard precautions (wearing personal protective equipment). The patient need only wear a mask when leaving the room. However, this patient is noninfectious."
    },
    {
        id: 13,
        stem: "With a traction injury to the anterior division of the brachial plexus, the PT would expect to see weakness of the elbow flexors, wrist flexors, and forearm pronators. The PT would also expect to find additional weakness in:",
        options: {
            A: "Wrist extension",
            B: "Thumb abduction",
            C: "Forearm supination",
            D: "Lateral rotation of the shoulder"
        },
        correct: "B",
        correctRationale: "Thumb abductors are innervated by the median nerve, primarily by the C6 nerve root. The anterior divisions contribute to the nerves that primarily serve flexors and, in this case, the thumb.",
        incorrectRationale: "All other choices are innervated by nerves off the posterior division. Wrist extensors include the extensor carpi radialis longus (ECRL), extensor carpi radialis brevis (ECRB), innervated by the radial nerve C6-7 and the extensor carpi ulnaris (ECU), innervated by the radial nerve C6-8. Supination results from action of the biceps brachii (musculocutaneous nerve C5-6) and the supinator (radial nerve C6)."
    },
    {
        id: 14,
        stem: "A patient complains of right buttock pain after slipping. The right hip had been forced into internal rotation. Lumbar active motion testing is full and pain free. Neurological findings are unremarkable. S1 provocation testing is unremarkable. Passive hip internal rotation is limited with pain and pulling noted in the right buttock region. Resisted external rotation produces pain in the same region. Based on these finding, the MOST LIKELY diagnosis would be:",
        options: {
            A: "Piriformis strain",
            B: "Quadratus lumborum strain",
            C: "Lumbar disc herniation at L5/S1",
            D: "Sacroiliac sprain/strain"
        },
        correct: "A",
        correctRationale: "Forceful hip internal rotation would overstretch and potentially strain the piriformis muscle. Limited passive hip internal rotation would reproduce symptoms from a tight or tense piriformis. Pain with resisted external rotation would suggest a contractile problem with the piriformis.",
        incorrectRationale: "Unremarkable sacroiliac provocation testing would rule out the sacroiliac joint as a cause of symptoms. Full pain-free lumbar AROM would rule out a quadratus lumborum strain. Negative neurological findings and neural tension would assist in ruling out an L5/S1 disc herniation."
    },
    {
        id: 15,
        stem: "A patient with MS demonstrates strong bilateral lower extremity extensor spasticity in the typical distribution of antigravity muscles. This patient would be expected to demonstrate:",
        options: {
            A: "Skin breakdown on the ischial tuberosities and lateral malleoli",
            B: "Sitting with both hips abducted and externally rotated",
            C: "Sacral sitting with increased extension and adduction of lower extremities",
            D: "Sitting with the pelvis laterally tilted and both lower extremities in windswept position"
        },
        correct: "C",
        correctRationale: "Spasticity is typically strong in antigravity muscles. In the lower extremities, this is usually the hip and knee extensors, adductors, and plantarflexors: Strong extensor tone results in sacral sitting with the pelvis tilted posteriorly. This results in a rounded upper spine (kyphotic) and forward head.",
        incorrectRationale: "A laterally tilted pelvis with both lower extremities in a windswept position is likely the result of asymmetrical spasticity. Hips are typically adducted and internally rotated, with extended lower extremities (scissoring position). Skin breakdown can occur on the ischial tuberosities with sacral sitting; breakdown on the lateral malleoli is not likely."
    },
    {
        id: 16,
        stem: "A computer programmer with no significant past medical history presents to the emergency room with complaints of fever, shaking chills, and a worsening productive cough. Complaints of chest pain over the posterior base of the left thorax are made worse on inspiration. An anteroposterior x-ray shows an infiltrate on the lower left thorax at the posterior base. This patient's chest pain is MOST LIKELY caused by:",
        options: {
            A: "Inflamed tracheobronchial tree",
            B: "Angina",
            C: "Trauma to the chest",
            D: "Infected pleura"
        },
        correct: "D",
        correctRationale: "The case is supportive of a pulmonary process as evidenced by radiography and history. Because the radiographic findings and the pain are in the same vicinity and worsen with inspiration, the likelihood is that this pain is pleuritic in origin.",
        incorrectRationale: "Angina is not the most likely cause because the cardiac system is not involved. There is no history of trauma to the chest and no trauma was found radiographically making it unlikely as the source of pain. An inflamed tracheobronchial tree would not usually reflect pain in the posterior base of the left thorax."
    },
    {
        id: 17,
        stem: "The posture of a patient's forefoot is an inverted position relative to the rearfoot while in subtalar neutral. What is the PT's BEST choice to document this finding?",
        options: {
            A: "Forefoot varus",
            B: "Medial column equinus",
            C: "Metatarsus abductus",
            D: "Forefoot valgus"
        },
        correct: "A",
        correctRationale: "When observing the position of plantar aspect of the forefoot relative to the neutral posture of the rearfoot (subtalar neutral), an inverted forefoot is described as a forefoot varus.",
        incorrectRationale: "Forefoot varus can be the result of developmental failure of the talar neck to derotate, osseous abnormality of the midtarsal joints, or as a result of increased muscle activity of muscles that invert the foot. Metatarsus adductus is a deformity in the transverse plane, whereas forefoot varus is a deformity in the frontal plane. Medial column equinus does not exist."
    },
    {
        id: 18,
        stem: "During a sensory examination, a patient complains of a dull, aching pain and is not able to discriminate a stimulus as sharp or dull. Two-point discrimination is absent. Based on these findings, the pathway that is intact is the:",
        options: {
            A: "Dorsal columns/neospinothalamic systems",
            B: "Anterior spinothalamic tract",
            C: "Fasciculus gracilis/medial lemniscus",
            D: "Lateral spinothalamic tract"
        },
        correct: "B",
        correctRationale: "Sensations interpreted as dull, aching pain travel in the anterior (paleo) spinothalamic tract.",
        incorrectRationale: "Discriminative, fast pain is carried in the lateral (neo) spinothalamic tract. Discriminative touch is carried in the proprioceptive pathways (fasciculus gracilis/cuneatus, medial lemniscus)."
    },
    {
        id: 19,
        stem: "A patient is hospitalized in an intensive care unit following a traumatic SCI resulting in C3 tetraplegia (ASIA A). The patient is receiving endotracheal suctioning, following development of significant pulmonary congestion. The recommended time duration for endotracheal suctioning is:",
        options: {
            A: "1-5 seconds",
            B: "10-15 seconds",
            C: "5-10 seconds",
            D: "15-20 seconds"
        },
        correct: "B",
        correctRationale: "The recommended time duration for endotracheal suctioning is 10-15 seconds.",
        incorrectRationale: "Any longer time (15-20 sec) risks serious hypoxemia, any shorter (1-5 or 5-10 sec) and the risk is ineffective secretion removal."
    },
    {
        id: 20,
        stem: "A patient presents with pronounced muscle weakness and wasting in the lower extremities, hypertension and a moon-shaped face with truncal obesity. The PT recognizes these symptoms as characteristic of:",
        options: {
            A: "Hypoparathyroidism",
            B: "Type II diabetes",
            C: "Addison's disease",
            D: "Cushing's syndrome"
        },
        correct: "D",
        correctRationale: "Cushing's syndrome causes a variety of signs and symptoms including hypoglycemia, hypokalemia, hypertension, muscle weakness, and wasting. Abnormal fat distribution (moon-shaped face, truncal, or central obesity) is a visible clinical feature.",
        incorrectRationale: "Addison's disease, primary adrenal insufficiency, causes insufficient release of cortisol and aldosterone from the adrenal glands with widespread clinical manifestations, including hypotension, weakness, anorexia, and nausea, and vomiting. Type II diabetes also causes weakness and fatigue along with polyuria, and other symptoms. It is associated with abdominal obesity but not moon-shaped face. Mild hypoparathyroidism is asymptomatic while chronic hypoparathyroidism produces hypocalcemia and neuromuscular irritability (tetany)."
    },
    {
        id: 21,
        stem: "During which phases of the gait cycle would a PT expect to observe an everted posture of the calcaneus?",
        options: {
            A: "Terminal stance (heel-off) to preswing (toe-off)",
            B: "Initial swing (acceleration) through midswing",
            C: "From midstance through heel-off (toe-off)",
            D: "From initial contact (heel strike) through loading response (foot-flat)."
        },
        correct: "D",
        correctRationale: "Calcaneal eversion is a component of the triplanar motion described as rearfoot pronation. During the gait cycle, rearfoot pronation, caused by normal ground reaction forces, occurs from initial contact (heel strike) through loading response (foot-flat).",
        incorrectRationale: "Following loading response (foot-flat) the examiner should observe the calcaneus reversing its position from its earlier everted posture. The examiner would not expect to observe an everted posture of the calcaneus following midstance."
    },
    {
        id: 22,
        stem: "A patient with right hemiparesis has difficulty clearing the more affected foot during the swing phase of gait. An appropriate physical therapy intervention for the right lower extremity might include:",
        options: {
            A: "Pushing backward while sitting on a rolling stool",
            B: "Sitting on a therapy ball, alternating lateral side steps and back to neutral",
            C: "Assumption of bridging",
            D: "Forward step-ups in standing, using graduate height steps"
        },
        correct: "D",
        correctRationale: "Decreased foot clearance during swing may result from weak hip and knee flexors or from a drop foot (weak dorsiflexors or spastic plantarflexors). Step-ups represent the best choice to functionally strengthen the hip and knee flexion using task-specific training.",
        incorrectRationale: "Bridging promotes knee flexion with hip extension. The sitting activities promote hip abduction (therapy ball) and knee extension (pushing backward)."
    },
    {
        id: 23,
        stem: "A researcher reviewed current literature related to moderate exercise for maintaining independence without accelerating disease progression in persons with amyotrophic lateral sclerosis (ALS). The search yielded nine studies: two clinical case reports, two cohort studies, three single randomized controlled trials (RCT's) and two multicenter RCT's. According to levels of evidence, which studies provide the BEST evidence for support of exercise in persons with ALS?",
        options: {
            A: "Case series without controls",
            B: "Multicenter RCTs",
            C: "Single-center RCTs",
            D: "Cohort/comparison studies"
        },
        correct: "B",
        correctRationale: "According to recognized Levels of Evidence, multicenter RCTs (level I RCT) provide the best evidence.",
        incorrectRationale: "Level II studies (single randomized clinical trials) are followed by level III (nonrandomized cohort/comparison studies). Level IV includes nonrandomized case control studies, whereas level V includes case series or case reports without controls."
    },
    {
        id: 24,
        stem: "A sports PT is working with a local high school football team. During the game, a player is tackled violently and incurs a blow to the head. The PT determines that the player is unresponsive with normal respirations. The IMMEDIATE course of action should be to:",
        options: {
            A: "Stabilize the neck, and flip back the helmet face mask",
            B: "Use the chin-lift method to improve the airway",
            C: "Summon Emergency Medical Services",
            D: "Ask for help to log-roll the player onto his back, while stabilizing his neck"
        },
        correct: "C",
        correctRationale: "The first step in basic life support (BLS) is to activate emergency medical services (EMS). Since the player is unresponsive with normal respirations, summoning EMS is the immediate priority before attempting airway maneuvers or rolling.",
        incorrectRationale: "Chin-lift might compromise the cervical spine in a trauma patient. Log-rolling is not the immediate priority over calling for help."
    },
    {
        id: 25,
        stem: "During a finger-to-nose test, a patient demonstrates hesitancy in getting started and is then unable to control the movement. The moving finger slams into the side of the face and misses the nose completely. The therapist documents these findings as moderate impairment in:",
        options: {
            A: "Dyssynergia",
            B: "Dysmetria",
            C: "Response orientation",
            D: "Dysdiadochokinesia"
        },
        correct: "B",
        correctRationale: "Dysmetria refers to impaired ability to judge the distance or range of movement.",
        incorrectRationale: "Response orientation refers to the ability to select the correct movement in response to a stimulus. Dysdiadochokinesia refers to impaired ability to perform rapid alternating movements. Dyssynergia refers to impaired ability to associate muscles together for complex movement (decomposition of movement)."
    },
    {
        id: 26,
        stem: "A patient with complete C6 tetraplegia (ASIA A) should be instructed to initially transfer with a sliding board using:",
        options: {
            A: "Shoulder extensors, external rotators, and anterior deltoid to position and lock the elbow",
            B: "Serratus anterior to elevate the trunk with elbow extensors stabilizing",
            C: "Pectoral muscles to stabilize the elbows in extension and scapular depressors to lift the trunk",
            D: "Shoulder depressors and triceps, keeping the hands flexed to protect tenodesis grasp"
        },
        correct: "A",
        correctRationale: "The patient with complete C6 tetraplegia will lack triceps (elbow extensors), and should be taught to lock the elbow for push-up transfers by using shoulder external rotators and extensors to position the arm; the anterior deltoid locks the elbow by reverse actions (all of these muscles are functional).",
        incorrectRationale: "Triceps are not functional in this patient. Pectoral muscles cannot be used to stabilize the elbows in extension."
    },
    {
        id: 27,
        stem: "A PT has been treating a patient for chronic subluxation of the patella in the outpatient clinic. The patient is now scheduled for a lateral release and is worried about any complications of the surgical procedure. The patient asks the PT to describe any potential complications. The PT's BEST response is to:",
        options: {
            A: "Refer the patient to a physical therapy colleague who specializes in knee problems",
            B: "Suggest that the patient speak with surgeon",
            C: "Do an internet search and print out the information desired by the patient",
            D: "Explain how previous patients that the therapist treated responded to the surgery"
        },
        correct: "B",
        correctRationale: "It is within the surgeon's scope of practice to discuss the indications and problems that could arise from this surgical procedure.",
        incorrectRationale: "It is not within the PT's scope of practice to be the expert that discusses problems associated with surgery. Referral should be made to the physician, not another therapist."
    },
    {
        id: 28,
        stem: "A patient is unable to perform overhead activities because of a painless inability to reach past 80° of right shoulder abduction. The 'empty can' test was positive. Early subacute physical therapy intervention should focus on:",
        options: {
            A: "Resistance exercises for the affected muscles",
            B: "Modalities to reduce pain and inflammation",
            C: "Superior translatory mobilizations to increase glenohumeral arthrokinematics motion",
            D: "Active assistive pulley exercises"
        },
        correct: "D",
        correctRationale: "The patient is most likely suffering from a supraspinatus tear or impingement. Acute PT intervention should focus on reduction of pain and inflammation. During the early subacute phase, active assistive pulley exercises would be indicated to promote healing of the supraspinatus muscle and maintain AROM of the glenohumeral joint.",
        incorrectRationale: "Performing a superior glide of the glenohumeral joint would not be beneficial to improve elevation of the arm. Use of modalities is not the focus at this point of intervention. Resistance exercise would be too difficult and not beneficial to promote healing of the injured tissues."
    },
    {
        id: 29,
        stem: "The PT is reviewing the medical history of a new patient being seen for balance deficits and general deconditioning. Prior to admission, the chief finding by the physician, 3 days ago, was a positive fecal blood test. Which laboratory value would confirm that the patient is safe for balance re-training activities?",
        options: {
            A: "Erythrocyte sedimentation rate (ESR) 7 mm/1 h.",
            B: "Leukocyte count 7,000",
            C: "Hematocrit 42%",
            D: "Platelet count 70,000"
        },
        correct: "C",
        correctRationale: "The stated hematocrit value is within the normal range for both males and females, and indicates the fecal blood loss is not significant at treatment time.",
        incorrectRationale: "The other choices (leukocyte count, platelet count, and ESR) are not indices of GI bleeding."
    },
    {
        id: 30,
        stem: "A middle-aged patient is recovering from surgical repair of an inguinal hernia and is experiencing persistent discomfort in the groin area. Patient education should focus on:",
        options: {
            A: "Avoiding sitting too long in any one position",
            B: "Avoiding straining or turning in bed",
            C: "Closed-mouth breathing during any lifting",
            D: "Proper lifting techniques and precautions against heavy lifting"
        },
        correct: "D",
        correctRationale: "Patients should be educated about proper lifting techniques and precautions against heavy lifting.",
        incorrectRationale: "Closed-mouth breathing during lifting is contraindicated, due to increased risk of intra-abdominal pressure with Valsalva's maneuver. Avoiding excessive straining is important. Turning in bed and sitting are part of daily functions."
    },
    {
        id: 31,
        stem: "A computer programmer in her second trimester of pregnancy was referred to physical therapy with complaints of tingling and loss of strength in both of her hands. Her symptoms are exacerbated if she is required to use her keyboard at work for longer than 20 minutes. The MOST beneficial physical therapy intervention is:",
        options: {
            A: "Ice packs to the carpal tunnel",
            B: "Hydrocortisone iontophoresis to the volar surfaces of both wrists",
            C: "Placing the wrists in resting splints",
            D: "Dexamethasone phonophoresis to the carpal tunnel"
        },
        correct: "C",
        correctRationale: "Gestational carpal tunnel syndrome (CTS) is not an unusual phenomenon, and results from extra fluid retention. The most effective intervention would be to place the wrists in a neutral position in splints. The carpal tunnel is, therefore, not compromised by poor hand positioning while at work.",
        incorrectRationale: "Modalities that use steroids are contraindicated for pregnant women. Although ice packs may relieve discomfort, they do little to correct the source of the problem."
    },
    {
        id: 32,
        stem: "A PT has decided to refer a 2-year-old child to a neurologist after the initial evaluation. The PT has concluded that the child may be autistic. The MOST PERTINENT factor to include in the referral is that the child is:",
        options: {
            A: "Delayed in gross motor skills",
            B: "Quiet and did not want to separate from the mother",
            C: "Defensive when touched",
            D: "Responsive to most but not all commands"
        },
        correct: "C",
        correctRationale: "Not tolerating being touched would signal a possible sensory integration issue that is common in children with autism. Although a referral for autism diagnosis should have additional information, this would be the most important factor from the choices given.",
        incorrectRationale: "Since this was the initial evaluation it is not uncommon for a child this age to be quiet, shy and fearful of the PT. This behavior may not have anything to do with autism, but that of being wary of strangers. A delay in gross motor skills does not necessarily indicate autism. This child could have mild cerebral palsy or just be delayed for no apparent reason. Responsive to most commands would be a positive outcome when dealing with a 2-year-old child. A child with autism may not respond to commands due to issues with cognition, lack of focus, or verbal deficits."
    },
    {
        id: 33,
        stem: "A patient was instructed to apply conventional (high-rate) transcutaneous electrical nerve stimulation (TENS) to the low back to modulate a chronic pain condition. The patient now states that the TENS unit is no longer effective in reducing the pain in spite of increasing the intensity to maximum. The PT should now advise the patient to:",
        options: {
            A: "Switch to modulation-mode TENS",
            B: "Increase the treatment frequency",
            C: "Decrease the pulse duration",
            D: "Switch to low-rate TENS"
        },
        correct: "A",
        correctRationale: "Because of the long-term, continuous use of TENS, the sensory receptors accommodated to the continuous current, and no longer responded to the stimuli. Changing to modulation mode (i.e., burst modulation), which periodically interrupts the current flow, does not allow accommodation to occur.",
        incorrectRationale: "None of the other choices decreases accommodation. Low-rate TENS is a motor level stimulation, not sensory. Increasing treatment frequency would result in accommodation occurring more quickly. Decreasing the pulse duration would require increasing the intensity to get a response, and the patient has already maximized the intensity."
    },
    {
        id: 34,
        stem: "After performing an ergonomic examination of a computer programmer and workstation, the most appropriate recommendation for achieving ideal wrist and elbow positioning would be to:",
        options: {
            A: "Maintain the keyboard in a position that allows a neutral wrist position",
            B: "Add armrests",
            C: "Elevate the keyboard to increase wrist flexion",
            D: "Lower the keyboard to increase wrist extension"
        },
        correct: "A",
        correctRationale: "Work involving increased wrist deviation from a neutral posture in either flexion/extension or radial/ulnar deviation has been associated with increased reports of CTS and other wrist and hand problems.",
        incorrectRationale: "Increasing wrist flexion or extension can be harmful. Adding armrests does not solve the wrist position problem."
    },
    {
        id: 35,
        stem: "An elderly patient receiving outpatient PT as a result of a stroke (cerebrovascular accident) presents with left hemiparesis. The patient requires moderate assistance for ADL and transfers. The patient lives with and is cared for by a single adult daughter. The patient arrives for a physical therapy session and the PT notes multiple bruises on the patient's face and arms. When asked about the bruises, the patient hesitates and says she does not know. Later in the session, the patient reports that her daughter is under a great deal of stress. In this case, what should the PT do?",
        options: {
            A: "Document and treat the bruises as necessary and assess whether the bruises are resolved at the next visit",
            B: "Contact the appropriate jurisdiction and file a report for suspected abuse/neglect",
            C: "Call the police and have the daughter arrested for elder abuse",
            D: "Counsel the daughter on how to handle stress and advise her to hire a personal care attendant to help care for her mother and prevent falls"
        },
        correct: "B",
        correctRationale: "The PT is legally mandated to report suspected elder abuse or neglect. This includes filing a report with the appropriate jurisdiction (e.g., Adult Protective Services).",
        incorrectRationale: "It is not the PT's role to arrest the daughter (police matter), nor should they ignore the signs. Counseling is inappropriate when abuse is suspected."
    },
    {
        id: 36,
        stem: "Following major surgery of the right hip, a patient ambulates with a Trendelenburg gait. Examination of the right hip reveals abductor weakness (gluteus medius 3/5) and ROM limitations in flexion and external rotation. As part of the intervention, the PT opts to include functional electrical stimulation to help improve the gait pattern. Stimulation should be initiated for the:",
        options: {
            A: "Left abductors during stance on the right",
            B: "Right abductors during stance on the right",
            C: "Left abductors during swing on the right",
            D: "Right abductors during swing on the right"
        },
        correct: "B",
        correctRationale: "During the stance phase of gait, the hip abductors of the support limb are activated to maintain the pelvis in a relatively horizontal position. This allows the opposite foot to clear the floor during swing.",
        incorrectRationale: "Stimulation of the right abductors throughout swing or the left hip abductors during swing or stance would not compensate for the weakness of the right hip abductors during the support period."
    },
    {
        id: 37,
        stem: "An 18-month-old child with Down syndrome and moderate developmental delay is being treated at an Early Intervention Program. Daily training activities that should be considered include:",
        options: {
            A: "Locomotor training using body weight support and a motorized treadmill",
            B: "Stimulation to postural extensors in sitting using rhythmic stabilization",
            C: "Rolling activities, initiating movement with stretch and tracking resistance",
            D: "Holding and weight shifting in sitting and standing using tactile and verbal cueing"
        },
        correct: "D",
        correctRationale: "Children with Down syndrome typically present with generalized hypotonicity. The low tone is best managed by weight-bearing activities in antigravity postures. Typical responses include widened base of support and co-contraction to gain stability. Verbal cueing for redirection is generally the best form of feedback to use, along with visually guided postural control.",
        incorrectRationale: "Proprioceptors are not in a high state of readiness, and the child may be slow to respond to proprioceptive facilitation techniques (i.e., stretch, resistance, rhythmic stabilization). With developmental delay, this child is not ready for intensive locomotor training. Rolling is probably not age appropriate for this child. The child should already possess this skill since most children with Down syndrome walk at 24 months of age."
    },
    {
        id: 38,
        stem: "A high school wrestler has been taking anabolic-androgenic steroids for the past 6 months to build muscle and improve performance. The PT working with the team suspects illegal drug use and examines the athlete for:",
        options: {
            A: "Rapid weight gain, marked muscular hypertrophy and mood swings",
            B: "Rapid weight loss with disproportionate muscular enlargement",
            C: "Changes in personality, including passivity and anxiety",
            D: "Hypotension, edema, and rapid muscular enlargement"
        },
        correct: "A",
        correctRationale: "Signs and symptoms of anabolic steroid use include rapid weight gain, elevated BP, acne on the face and upper back, and changes in body composition with marked muscular hypertrophy, especially in the upper body. Additional signs include frequent bruising, needle marks, male breast enlargement, or in females, secondary male characteristics and menstrual irregularities. With prolonged use, jaundice or changes in personality (mood swings, rages) may develop.",
        incorrectRationale: "The other choices are not characteristic of anabolic steroid use."
    },
    {
        id: 39,
        stem: "While driving the ball during a golf match, a patient felt an immediate sharp pain in the right lower back. The following morning, the patient reported stiffness, with easing of pain after taking a shower. Based on this information, the source of the pain is MOST LIKELY:",
        options: {
            A: "Diminished blood supply to the spinal cord",
            B: "Facet joint impingement",
            C: "A stress fracture",
            D: "Nerve root compression"
        },
        correct: "B",
        correctRationale: "Facet joint dysfunction is exacerbated with sustained positions, and eases with movement. Progressive increase in activity intensifies the pain.",
        incorrectRationale: "Stress fracture pain is worse when weight-bearing, and is not necessarily worse in the morning. Nerve root involvement would cause radiating pain to the extremity. The spinal cord has no innervation and is not a source of pain."
    },
    {
        id: 40,
        stem: "A PT is performing the maximal cervical quadrant test to the right with a patient with right C5-C6 facet syndrome. The patient would most likely complain of:",
        options: {
            A: "Pain in the right cervical region",
            B: "Referred pain to the left midscapular region",
            C: "Radicular pain into the right upper limb",
            D: "Tightness in the right upper trapezius"
        },
        correct: "A",
        correctRationale: "The test position would consist of right cervical side-bending with extension. This shortens the upper trapezius and stresses the right cervical facets. When a pathological cervical facet is provoked, the result will cause pain in the ipsilateral cervical region, with referred pain to the ipsilateral scapular region. The test might also compress the nerve root, creating radicular signs, but only on the right side.",
        incorrectRationale: "This test would shorten the upper trapezius so it will not cause tightness in the muscle. Radicular pain would be consistent with dysfunction of a spinal nerve, not a facet joint syndrome. Referred pain to the left midscapular region would be caused by a test that was applied to the structures on the left side."
    },
    {
        id: 41,
        stem: "A 62-year old patient has chronic, obstructive pulmonary disease (COPD). Which of these pulmonary test results will NOT be increased when compared with those of a 62-year-old healthy individual?",
        options: {
            A: "Functional residual capacity",
            B: "FEV1/FVC (forced vital capacity) ratio",
            C: "Total lung capacity",
            D: "Residual volume"
        },
        correct: "B",
        correctRationale: "An obstructive pattern on pulmonary function tests includes increased total lung capacity, caused by destruction of alveolar walls. This same destruction causes an increased residual volume, with a resulting increased functional residual capacity and decreased vital capacity. The GOLD (Global Initiative for Obstructive Lung Disease) classification of an FEV1/FVC ratio below 70% is indicative of COPD.",
        incorrectRationale: "The other choices are all increased with COPD."
    },
    {
        id: 42,
        stem: "A patient with a grade 2 quadriceps strain returns to physical therapy after the 1st exercise session, complaining of muscle soreness that developed later in the evening and continued into the next day. The patient is unsure whether to continue with the exercise. The PT can minimize the possibility of this happening again by using:",
        options: {
            A: "Eccentric exercises, 3 sets of 10, with gradually increasing intensity",
            B: "Concentric exercises, 3 sets of 10, with gradually increasing intensity",
            C: "Eccentric exercises, 1 set of 10, lifting body weight (sit-to-stand)",
            D: "Concentric exercises, 3 sets of 10, at 80% of maximal intensity"
        },
        correct: "B",
        correctRationale: "This patient is experiencing delayed-onset muscle soreness (DOMS) as a result of vigorous exercise or muscular overexertion. It typically begins 12-24 hours after exercise, peaks in 24-48 hours, and can last up to 5-7 days. Concentric exercises with gradually increasing intensity can help minimize this.",
        incorrectRationale: "DOMS is usually greater after muscle lengthening or eccentric exercise. It can be lessened by gradually increasing intensity and duration of exercise, and not starting at 80% of maximal intensity."
    },
    {
        id: 43,
        stem: "A patient with multiple sclerosis (MS) exhibits moderate fatigue during a 30-minute exercise session. When the patient returns for the next regularly scheduled session 2 days later, the patient reports going right to bed after the last session. Exhaustion was so severe, the patient was unable to get out of bed until late afternoon of the next day. The PT's BEST strategy is to:",
        options: {
            A: "Utilize a distributed practice schedule",
            B: "Utilize a massed practice schedule",
            C: "Treat the patient in a warm, relaxing environment",
            D: "Switch the patient to exercising in a warm pool"
        },
        correct: "A",
        correctRationale: "Common problems in MS include fatigue and heat intolerance. Exercise intensity should be reduced, and a distributed practice schedule should be used, in which rest times equal or exceed exercise times.",
        incorrectRationale: "A massed practice schedule in which the exercise time exceeds the rest time is contraindicated as is a warm environment or warm pool, which can increase fatigue."
    },
    {
        id: 44,
        stem: "A patient has lumbar spinal stenosis encroaching on the spinal cord. The PT should educate the patient to avoid:",
        options: {
            A: "Use of a rowing machine",
            B: "Bicycling using a recumbent cycle ergometer",
            C: "Swimming using a crawl stroke",
            D: "Tai chi activities"
        },
        correct: "C",
        correctRationale: "Continuous positioning in spinal extension increases symptoms in patients with spinal stenosis. Activities such as swimming using a crawl stroke place the spine in this position.",
        incorrectRationale: "All other activities described do not require the patient to maintain a continuous extended spinal position."
    },
    {
        id: 45,
        stem: "A PT is performing clinical research in which a specific myofascial technique is applied to a patient with chronic back pain. She is using a single-case experimental design with an A-B-A-B format. Her research hypothesis states that pain-rating scores will decrease with the treatment intervention. Acceptance of this hypothesis would be indicated if:",
        options: {
            A: "B is less than A",
            B: "B is greater than A at the 1.0 level",
            C: "B is greater than A at the 0.05 level",
            D: "B is equal to A"
        },
        correct: "A",
        correctRationale: "In an A-B-A-B single-subject design, A represents multiple baseline measurements, and B represents multiple posttreatment measurements. If the hypothesis is accepted, the pain-rating scores will be lower following treatment compared with the baseline measurements.",
        incorrectRationale: "Any choice in which B is equal to or greater than A is incorrect. That would indicate that there was no change in pain or that it increased after treatment."
    },
    {
        id: 46,
        stem: "An individual with a body mass index (BMI) of 33 kg/m^2 is referred to an outpatient exercise program. The PT in charge of the program recognizes this patient is at increased risk for:",
        options: {
            A: "Increased anxiety and depression",
            B: "Hypothermia during exercise",
            C: "Rapid weight loss during the initial weeks",
            D: "Hyperthermia during exercise"
        },
        correct: "D",
        correctRationale: "A patient with a BMI of 33 kg/m^2 is obese (BMI >30 kg/m^2) and is at increased risk for hyperthermia during exercise (as well as orthopedic injury).",
        incorrectRationale: "Weight loss is the result of a complex interplay between diet and exercise, and not the result of exercise alone. A balanced program of exercise and diet will produce effects over time, not just in the initial weeks. An appropriately prescribed exercise program should decrease anxiety and depression. Hypothermia is not typical with obesity."
    },
    {
        id: 47,
        stem: "A patient with a recent modified radial mastectomy for breast cancer is referred to physical therapy. The therapist recognizes that an important predictor for lymphedema after treatment for breast cancer is:",
        options: {
            A: "A diet low in sodium",
            B: "Obesity",
            C: "Mild strength loss in the affected extremity",
            D: "Use of diuretics"
        },
        correct: "B",
        correctRationale: "Obesity is consistently reported as a predictor of lymphedema after modified radial mastectomy for breast cancer. Weight management should be an integral part of patient education.",
        incorrectRationale: "Diuretics are sometimes used, and even though they do not change the accumulation of protein in the interstitial spaces, they are not a predictor of lymphedema. Diet is thought to be very important, but there are no recommended diets except one that is healthy and low in sodium; it is not predictive, however. It is common to have strength loss after a surgery, and although strength loss is associated with lymphedema in the more advanced stages, it is not predictive of lymphedema."
    },
    {
        id: 48,
        stem: "An elderly patient has been confined to bed for 2 months, and now demonstrates limited ROM in both lower extremities. Range in hip flexion is 50-115°, and knee flexion is 100-120°. The MOST beneficial intervention to improve flexibility and ready this patient for standing is:",
        options: {
            A: "Hold-relax techniques followed by passive range of motion (PROM), 10 repetitions, two times per day",
            B: "Mechanical stretching using traction and 5-lb weights, 2 hours, two times per day",
            C: "Manual passive stretching, 10 repetitions each joint, two times per day",
            D: "Tilt-table standing, 20 minutes, daily."
        },
        correct: "B",
        correctRationale: "Prolonged mechanical stretching involves a low-intensity force (generally 5 to 15 lb) applied over a prolonged period (30 minutes to several hours). It is generally the most beneficial way to manage long-standing flexion contractures.",
        incorrectRationale: "Manual passive stretching and tilt-table standing are shorter-duration stretches that are not likely to be as effective in this case. Hold-relax techniques can be used to improve flexibility in the presence of shortening of muscular elements, but are not likely to be effective in this case because of the short duration and long-standing contracture affecting connective tissue elements."
    },
    {
        id: 49,
        stem: "During a home visit, a PT is providing postural drainage in the Trendelenburg position to an adolescent with cystic fibrosis. The patient suddenly complains of right-sided chest pain and shortness of breath. On auscultation, there are no breath sounds on the right. The therapist should:",
        options: {
            A: "Call emergency medical services because it may be a pneumothorax",
            B: "Continue treating as it is possibly a mucous plug",
            C: "Reposition patient with the head of the bed flat because the Trendelenburg position is causing shortness of breath",
            D: "Place the right lung in a gravity-dependent position to improve perfusion"
        },
        correct: "A",
        correctRationale: "The combined signs and symptoms of absent breath sounds, sudden onset of chest pain and shortness of breath indicate a pneumothorax, especially in an adolescent (growth spurt) with pathological changes of lung tissue. This is an emergency situation.",
        incorrectRationale: "The other interventions (continuing treating reposition the patient) do not adequately address the emergency nature of this situation, given the symptoms presented. Potential harm can come to this patient."
    },
    {
        id: 50,
        stem: "A patient is 5 days' postmyocardial infarction and is referred for inpatient cardiac rehabilitation. Appropriate criteria for determining the initial intensity of exercise include:",
        options: {
            A: "> 1 mm ST segment depression, horizontal or downsloping",
            B: "HR < 120 bpm and rate of perceived exertion (RPE) < 13",
            C: "Systolic BP < 240 mm Hg or diastolic BP < 110 mm Hg",
            D: "HR resting plus 30 bpm and RPE < 14"
        },
        correct: "B",
        correctRationale: "Intensity of exercise is prescribed using HR and RPE and monitored using HR, RPE and signs of exertional intolerance. For post-MI patients, an RPE < 13 (6-20 scale) and a HR < 120 beats/min (or HR resting plus 20 bpm) is recommended.",
        incorrectRationale: "HR plus 30 beats/min is recommended for postsurgery patients. Signs and symptoms for an upper limit of exercise intensity include choices 1 and 3 along with onset of angina, and ECG disturbances (ventricular arrhythmias, second-or third-degree atrioventricular block, atrial fibrillation, etc)."
    }
];
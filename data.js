const dataData = [
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
    },
    {
        id: 51,
        stem: "A PT examines a patient with a right CVA and determines that the patient has a profound deficit of homonymous hemianopsia. The BEST INITIAL strategy to assist the patient in compensating for this deficit is to:",
        options: {
            A: "Provide constant reminders, printed notes on the left side, telling the patient to look to the left",
            B: "Teach the patient to turn the head to the affected left side",
            C: "Place items such as eating utensils on the left side",
            D: "Rearrange the room so that while the patient is in bed, the left side is facing the doorway."
        },
        correct: "B",
        correctRationale: "A patient with homonymous hemianopsia needs to be made aware of the deficit and instructed to turn the head to the affected left side (a compensatory training strategy).",
        incorrectRationale: "Initial strategies include placing items on the right (unaffected side), not the left side, so that the patient can successfully interact with the environment. Later, as there is ability to compensate, items can be moved to midline, and finally to the affected left side."
    },
    {
        id: 52,
        stem: "A patient with a 10-year history of Parkinson's disease (PD) has been taking levodopa (Sinemet) for the last 5 years. The patient presents with deteriorating function and is no longer able to walk independently due to constant and uncontrolled involuntary movements. During the examination, the PT observes that the patient is restless, with constant dancing, hyperkinetic movements of his legs. The PT's BEST course of action is to:",
        options: {
            A: "Complete the treatment session, focusing specifically on documenting the effects of rigidity",
            B: "Document the observations and refer the patient back to the physician for possible medication adjustment",
            C: "Examine for additional signs of chronic levodopa therapy, such as dizziness and headache",
            D: "Talk to the spouse to see if the patient is taking any drugs with hallucinogenic effects, such as selegiline."
        },
        correct: "B",
        correctRationale: "Dyskinesias (involuntary movements) are caused by an adverse effect of prolonged use of dopamine. Other changes include gastrointestinal disturbances (nausea, vomiting) and mental disturbances (restlessness, general overactivity, anxiety, or depression). Medication adjustment may reduce some of these effects and improve function.",
        incorrectRationale: "Although the symptoms described in the other choices may also occur with pharmacological management of PD, they do not adequately explain the presence of adventitious or involuntary movements. Selegiline is used in early PD; its main adverse effects include nausea, dry mouth, dizziness, anxiety, and hallucinations. Failure to notify the physician of these documented adverse effects can jeopardize the patient's functional outcomes and safety."
    },
    {
        id: 53,
        stem: "A patient with stasis dermatitis secondary to venous insufficiency is being examined by the PT. Visual inspection of the skin can be expected to reveal:",
        options: {
            A: "Extensive erosions with serous exudate",
            B: "Pruritus, erythema and edema",
            C: "Hemosiderin staining",
            D: "Plaques with scales"
        },
        correct: "C",
        correctRationale: "Hemosiderin staining is indicative of venous insufficiency. It is characterized by dark pigmentation (bluish-red color) and result from leakage of hemosiderin (the by-product of red cell hemolysis) in the presence of blood stasis and incompetent valves.",
        incorrectRationale: "The other choices are not characteristic of stasis dermatitis secondary to venous insufficiency. Red, oozing crusting rash; erosions; exudate; and pruritic vesicles are characteristic of eczema."
    },
    {
        id: 54,
        stem: "A 24-year-old woman who is 12 weeks' pregnant asks a PT if it is safe to continue with her aerobic exercise. Currently, she jogs 3 miles, three times a week, and has done so for the past 10 years. The Therapist's BEST answer is:",
        options: {
            A: "Jogging is safe at mild to moderate intensities, whereas vigorous exercise is contraindicated",
            B: "Jogging is safe as long as the target HR does not exceed 140 beats/min",
            C: "Continue jogging only until the fifth month of pregnancy",
            D: "Swimming is preferred over walking or jogging for all phases of pregnancy"
        },
        correct: "A",
        correctRationale: "According to the American College of Sports Medicine, women can continue to exercise regularly (three times a week) at mild to moderate intensities throughout pregnancy if no additional risk factors are present. After the 1st trimester, women should avoid exercise in the supine position because this position is associated with decreased cardiac output. Prolonged standing with no motion should also be avoided.",
        incorrectRationale: "Non-weight bearing exercise (swimming) is an acceptable alternative to walking or jogging. However, this patient's interests and skills are with jogging, making it the most appropriate choice. Exercise prescription should be specific to the individual. Using a target HR of 140 or a target date of the fifth month of pregnancy does not allow for this."
    },
    {
        id: 55,
        stem: "A patient is able to stand feet together, unassisted, with eyes open. When asked to close the eyes, the patient immediately loses balance and has to take a step and grab onto the table to keep from falling. The PT documents this finding as:",
        options: {
            A: "Ataxic posture",
            B: "Positive Romberg test",
            C: "Negative Romberg test",
            D: "Positive Dizziness Handicap Inventory"
        },
        correct: "B",
        correctRationale: "In a positive Romberg test, the patient demonstrates instability during the eyes closed (EC) condition but not during the eyes open (EO) condition; commonly seen in dorsal column disease.",
        incorrectRationale: "In a negative Romberg test, the patient would be able to maintain balance equally well under both conditions (EO and EC). The Dizziness Handicap Inventory is a scale of self-perceived handicap as a result of vestibular disorders. An ataxic posture can be seen in cerebellar disease and refers to instability and increased postural sway, present during the EO and EC condition."
    },
    {
        id: 56,
        stem: "A patient is referred for rehabilitation after a middle cerebral artery stroke. Based on this diagnosis, a PT can expect that the patient will present with:",
        options: {
            A: "Contralateral hemiparesis and sensory deficits, with the leg more involved than the arm",
            B: "Contralateral hemiplegia with central poststroke pain and involuntary movements",
            C: "Contralateral hemiparesis and sensory deficits, with the arm more involved than the leg",
            D: "Decreased pain and temperature to the face and ipsilateral ataxia, with contralateral pain and thermal loss of the body"
        },
        correct: "C",
        correctRationale: "A CVA affecting the middle cerebral artery will result in symptoms of contralateral hemiparesis and hemisensory deficits with greater involvement of the arm than the leg.",
        incorrectRationale: "The findings presented in choice A are characteristic of a CVA affecting the anterior cerebral artery. The findings presented in choice D are characteristic of a CVA affecting the vertebral artery, and posterior inferior cerebellar artery (lateral medullary syndrome)."
    },
    {
        id: 57,
        stem: "A patient complains of pain (7/10) and limited range of motion (ROM) of the right shoulder as a result of chronic overuse. The PT elects to use procaine hydrochloride iontophoresis as part of the intervention for this patient's problems. To administer this substance, it would be appropriate to use:",
        options: {
            A: "Continuous monophasic current, with the medication under the anode",
            B: "Continuous biphasic current, with the medication under the anode",
            C: "Interrupted biphasic current, with the medication under the cathode",
            D: "Continuous monophasic current, with the medication under the cathode"
        },
        correct: "A",
        correctRationale: "Because like charges are repelled, the positively charged medication would be forced into the skin under the positive electrode (anode). A continuous, unidirectional current flow is very effective in repelling ions into the skin. Procaine is a positive medicinal ion, and will be repelled from the anode (positive pole).",
        incorrectRationale: "A pulsed, interrupted or bidirectional current generates less propulsive force owing to the discontinuous nature of the current. The cathode is not an appropriate choice to administer this medication."
    },
    {
        id: 58,
        stem: "A patient fractured the right mid tibia in a skiing accident 3 months ago. After cast removal, a severe foot drop was noted. The patient wants to try electrical stimulation orthotic substitution. The PT would set up the functional electrical stimulation to contract the appropriate muscles during:",
        options: {
            A: "Mid swing",
            B: "Late stance at push-off",
            C: "Early stance at foot-flat",
            D: "Late stance at toe-off"
        },
        correct: "A",
        correctRationale: "Foot drop is a swing phase deficit. Stimulation of the dorsiflexor muscles during the swing phase places the foot in a more neutral position and prevents the toes from contracting the ground and interfering with the gait pattern.",
        incorrectRationale: "Plantarflexors are active from heel strike to foot-flat, and from heel-off to toe-off."
    },
    {
        id: 59,
        stem: "A patient who is terminally ill with cancer is in tears, unable to cope with the changes in life and current hospitalization. The PT has a referral for gait training so that the patient can be discharged to home under hospice care. The BEST approach is to:",
        options: {
            A: "Encourage denial so the patient can cope better with life's challenges",
            B: "Ask the patient questions in order to obtain a detailed history",
            C: "Take time now to allow the patient to express fears and frustrations",
            D: "Ignore the tears and focus on therapy, but in a compassionate manner"
        },
        correct: "C",
        correctRationale: "It is important to be supportive of a patient who is experiencing losses and resentment. Allow the patient to fully verbalize feelings and frustrations.",
        incorrectRationale: "Ignoring the patient's responses or encouraging denial will not allow for healing and acceptance. In an emotional state, the patient may be unable to give an accurate history."
    },
    {
        id: 60,
        stem: "A patient with multiple sclerosis (MS) has been on prednisolone for the past 4 weeks. The medication is now being tapered off. This is the third time this year that the patient has received this treatment for an MS exacerbation. The PT recognizes that possible adverse effects of this medication are:",
        options: {
            A: "Weight gain and hyperkinetic behaviors",
            B: "Muscle wasting, weakness and osteoporosis",
            C: "Spontaneous fractures with prolonged healing or malunion",
            D: "Hypoglycemia and nausea or vomiting"
        },
        correct: "B",
        correctRationale: "This patient is receiving systemic corticosteroids to suppress inflammation and the normal immune system response during an MS attack. Chronic treatment leads to adrenal suppression. Numerous adverse reactions/side effects can occur. Those affecting the patient's capacity to exercise include muscle wasting and pain, weakness and osteoporosis. Weight loss is common (anorexia) with nausea and vomiting.",
        incorrectRationale: "Adrenal suppression produces hyperglycemia, not hypoglycemia. Spontaneous fractures are not typical. Hyperkinetic behavior is not an expected adverse effect."
    },
    {
        id: 61,
        stem: "A patient is 4 weeks' post-myocardial infarction (MI). Resistive training using weights to improve muscular strength and endurance is appropriate:",
        options: {
            A: "Only during post-acute phase 3 cardiac rehabilitation",
            B: "During all phases of rehabilitation, if judicious monitoring of heart rate is used",
            C: "If exercise intensities are kept below 85% maximal voluntary contraction",
            D: "If exercise capacity is greater than 5 metabolic equivalents (METs) with no angina symptoms/ST segment depression"
        },
        correct: "D",
        correctRationale: "Resistance training is typically initiated after patients have completed 4-6 weeks of supervised cardio respiratory endurance exercise. Lower intensities are prescribed. Careful monitoring of BP is necessary because BP will be higher and HR lower than for aerobic exercise. Patients should demonstrate an exercise capacity greater than 5 METs without angina symptoms or ST segment depression.",
        incorrectRationale: "The common use of a percentage of 1 RM (repetition maximum) estimates intensity, and should be used only as a general guideline. Intensity should be assessed using perceived intensity. Exercise should be terminated at a rate of perceived exertion (RPE; Borg Scale 6-20) of 15-16. During resistance training, HR response is disproportionate to oxygen consumption and should not be used as a measure of intensity. Resistance training is not restricted to phase 3 programs, as long as proper guideline are followed."
    },
    {
        id: 62,
        stem: "To test for maximal passive tibiofemoral internal or external rotation the knee should be placed in:",
        options: {
            A: "45° of knee flexion",
            B: "60° of knee flexion",
            C: "90° of knee flexion",
            D: "30° of knee flexion"
        },
        correct: "C",
        correctRationale: "Rotation of the tibia on the femur is influenced by sagittal knee position. Rotation of the knee increases with increasing flexion up to 90°. After 90°, the soft tissues behind the knee restrict further increases in rotation at the knee.",
        incorrectRationale: "Placing the knee in 30°, 45°, or 60° of flexion will not allow for maximal tibiofemoral rotation."
    },
    {
        id: 63,
        stem: "An adolescent female is referred to physical therapy with a diagnosis of anterior knee pain. Positive findings include pes planus, lateral tibial torsion, and genu valgum. The position that the femur will be in is excessive:",
        options: {
            A: "Retroversion",
            B: "Lateral rotation",
            C: "Abduction",
            D: "Medial rotation"
        },
        correct: "D",
        correctRationale: "Common abnormal postural findings consistent with anterior knee pain in an adolescent female include pes planus, lateral tibial torsion, and genu valgum. These are compensatory changes that occur when the femur is in excessive medial rotation.",
        incorrectRationale: "Abduction is associated with coxa valga (an increase in the angle of the femoral head to the neck), which is not commonly associated with knee pain. Lateral femoral rotation is commonly observed with genu varum. Retroversion of the hip is an abnormally small angle between the femoral neck and the condyles, and is not affected by posture."
    },
    {
        id: 64,
        stem: "A therapist is examining a patient with superficial partial-thickness burns over 20% of the trunk. The correct identification of this burn type by surface appearance characteristics includes:",
        options: {
            A: "A dry surface with no blisters",
            B: "Intact blisters and a moist, weeping surface if blisters are removed",
            C: "A wet surface with broken blisters",
            D: "Parchment-like, leathery, and dry surface"
        },
        correct: "B",
        correctRationale: "The surface appearance of a superficial partial-thickness burn is characterized by intact blisters and moist, weeping or glistening surface when blisters are removed.",
        incorrectRationale: "A dry surface with no blisters is characteristic of a superficial burn. A wet surface with broken blisters is characteristic of a deep partial-thickness burn. Parchment-like, leathery, and dry surface is characteristic of a full-thickness burn."
    },
    {
        id: 65,
        stem: "A 10-year-old presents with pain (4/10) and limited knee ROM (50-95°) following surgical repair of the medial collateral ligament and ACLs. In this case, the modality that can be used with PRECAUTION is:",
        options: {
            A: "Premodulated interferential current",
            B: "Continuous shortwave diathermy",
            C: "Low-dose ultrasound (US)",
            D: "High-rate transcutaneous electrical stimulation"
        },
        correct: "C",
        correctRationale: "Because the epiphyseal plates do not close until the end of puberty, US energy should be applied with caution around the epiphyseal area due to its potential to cause bone growth disturbances. However, there is no documented evidence that US creates any direct untoward effects on the growth plates, especially if applied at low dosage.",
        incorrectRationale: "Electrical stimulation or deep thermotherapy would have no deleterious effects on the epiphyseal plates because no mechanical effects on hard tissue are associated with their use."
    },
    {
        id: 66,
        stem: "A CONTRAINDICATION to initiating extremity joint mobilization on a patient with chronic pulmonary disease may include:",
        options: {
            A: "Reflex muscle guarding",
            B: "Long-term corticosteroid therapy",
            C: "Concurrent inhalation therapy",
            D: "Functional chest wall immobility"
        },
        correct: "B",
        correctRationale: "Very often, patient with chronic pulmonary disease have been managed using corticosteroid therapy. Long-term steroid use has the catabolic effects of osteoporosis, weakened supporting joint structures and muscle wasting, making joint mobilization contraindicated.",
        incorrectRationale: "There would not be any increase in reflex muscle guarding in a patient with pulmonary disease over that in other patient populations. Inhalation therapy, even with a corticosteroid, has minimal systemic uptake of the drug and, therefore, would not be a contraindication to performing joint mobility. A functionally limited thorax may be considered when deciding on the starting body position for joint mobility, but will not change the stability to perform the task."
    },
    {
        id: 67,
        stem: "Manual glide of the talus posteriorly within the ankle joint mortise can be used as a technique to increase:",
        options: {
            A: "Tibiotalar dorsiflexion motion",
            B: "Talocalcaneal supination",
            C: "Talocalcaneal pronation",
            D: "Distal tibiofibular joint extensibility"
        },
        correct: "A",
        correctRationale: "Based on the arthrokinematic convex-concave rules of motion, ankle joint dorsiflexion is described as occurring through a combination of anterior roll and posterior translation of the talus within the mortise joint. Dorsal glide of the talus would be utilized to improve ankle joint dorsiflexion if posterior translation of the talus is limited.",
        incorrectRationale: "Posterior glide of the talus is not a technique to improve subtalar joint motions or distal tibiofibular joint extensibility."
    },
    {
        id: 68,
        stem: "A patient with spastic hemiplegia is referred to physical therapy for ambulation training. The patient is having difficulty in rising to a standing position due to cocontraction of the hamstrings and quadriceps. The therapist elects to use biofeedback as an adjunct to help break up this pattern. For knee extension, the biofeedback protocol should consist of:",
        options: {
            A: "High-detection sensitivity, with electrodes placed far apart",
            B: "High-detection sensitivity, with electrodes placed close together",
            C: "Low-detection sensitivity, with electrodes placed close together",
            D: "Low-detection sensitivity, with electrodes placed far apart"
        },
        correct: "C",
        correctRationale: "When the electrodes are close together, the likelihood of detecting undesired motor unit activity from adjacent muscles (crosstalk) decreases. By setting the sensitivity (gain) low, the amplitude of signals generated by the hypertonic muscles would decrease and keep the EMG output from exceeding a visual or auditory range.",
        incorrectRationale: "The other choices do not achieve these goals. The wider the spacing of electrodes, the more volume of the muscle is monitored. Thus, when targeting a specific muscle, a narrow spacing should be used. When the focus is not on a specific muscle but instead to encourage a generic motion such as shoulder elevation, then a wider spacing of electrodes can be used. In addition, when working with weakness of a muscle where there is a decreased ability to recruit motor units or a decrease in the size and number of motor units, then a wider spacing and a high sensitivity would be used in order to create an adequate visible signal."
    },
    {
        id: 69,
        stem: "A baseball pitcher was seen by a PT following surgical repair of a SLAP (superior labral, anterior posterior) lesion of his pitching arm. In follow-up care, the therapist needs to pay attention to the pitching motion. The phase of the throwing motion that puts the greatest stress on the anterior labrum and capsule is:",
        options: {
            A: "Wind-up",
            B: "Acceleration",
            C: "Deceleration",
            D: "Cocking"
        },
        correct: "D",
        correctRationale: "During the cocking phase, the arm is taken into the end-range of humeral external rotation. At that point, the anterior aspects of the capsule and labrum are acting as constraints to prevent excessive anterior glide of the humerus.",
        incorrectRationale: "The other phases of the throwing motion do not place the same degree of strain on the anterior labrum and capsule."
    },
    {
        id: 70,
        stem: "A frail, elderly patient has recently been admitted to a skilled nursing facility following a fall-related injury (fractured hip with open reduction, internal fixation). The patient lived alone on the second floor and was unable to return home. The patient is extremely agitated over being in a nursing facility and demonstrates early signs of dementia, exclaiming to the PT, 'Leave me alone, I just want to get out of here!' An important approach to take while working with this patient is to:",
        options: {
            A: "Firmly state what the patient is expected to perform",
            B: "Be calm and supportive, and use only one-or two-level commands",
            C: "Minimize verbal communication and maximize guided movements",
            D: "Promise anything to calm the patient down, as long as some walking occurs"
        },
        correct: "B",
        correctRationale: "An agitated patient with dementia does not process information easily. A calm and supportive approach with low-level commands (one or two actions) provides the best approach for this patient.",
        incorrectRationale: "Establishing rules, confrontation and making unrealistic promises that cannot be kept may increase agitation. Guided movements may help, but communication should be maintained."
    },
    {
        id: 71,
        stem: "Upon examining a patient with vague hip pain that radiates to the lateral knee, the PT finds a negative FABERE test, a negative grind test and a positive Noble's compression test. The dysfunction is MOST LIKELY due to:",
        options: {
            A: "DJD of the hip",
            B: "SI joint dysfunction",
            C: "Irritation of the L5 spinal nerve root",
            D: "An iliotibial band friction disorder"
        },
        correct: "D",
        correctRationale: "A positive Noble's compression test is an indication of an iliotibial band friction disorder.",
        incorrectRationale: "A negative FABERE test can rule out SI joint dysfunction. A negative grind test eliminates DJD at the hip. There were no findings to implicate the L5 nerve root."
    },
    {
        id: 72,
        stem: "What common compensatory postures would a PT expect for a patient diagnosed with fixed severe forefoot varus?",
        options: {
            A: "Toeing-in and lateral rotation of the femur",
            B: "Excessive midtarsal supination and lateral rotation of the tibia",
            C: "Subtalar pronation and medial rotation of the tibia",
            D: "Excessive ankle dorsiflexion and medial rotation of the femur"
        },
        correct: "C",
        correctRationale: "In order to maintain the center of gravity over the base of support, the subtalar joint must pronate, and the entire lower quarter must medially rotate.",
        incorrectRationale: "Because the expected compensation is pronation of the ankle the medial rotation of the tibia, the responses with dorsiflexion and/or external rotation are incorrect."
    },
    {
        id: 73,
        stem: "A weight lifter exhibits marked hypertrophy after embarking on a strength training regime. Hypertrophy can be expected to occur following at least:",
        options: {
            A: "3-4 weeks of training",
            B: "1-2 weeks of training",
            C: "2-3 weeks of training",
            D: "6-8 weeks of training"
        },
        correct: "D",
        correctRationale: "Hypertrophy is the increase in muscle size as a result of resistance training and can be observed following at least 6-8 weeks of training. Individual muscle fibers are enlarged, contain more actin and myosin and have more, larger myofibrils.",
        incorrectRationale: "The other choices are too brief a time interval to show demonstrable changes. Some strengthening can occur, but no obvious hypertrophy."
    },
    {
        id: 74,
        stem: "A patient with a diagnosis of chronic prostatitis is referred for physical therapy. As part of a multidisciplinary treatment program, the therapist considers performing manual therapy compression techniques applied to tender, tight pelvic floor muscles. Which of the following muscles should the therapist target in this case?",
        options: {
            A: "Piriformis, gluteus medius, and pubococcygeus",
            B: "Pubococcygeus, gluteus medius, and obturator internus",
            C: "Obturator internus, gluteus medius, and piriformis",
            D: "Obturator internus, pubococcygeus, and piriformis"
        },
        correct: "D",
        correctRationale: "Most men with chronic prostatitis have tenderness and tightness of the striated muscles of the pelvic floor. The goal of manual therapy compression techniques is to relax and lengthen those muscles, as well as to relieve the pain associated with palpable tender points (trigger points). Striated muscles of the pelvic floor that are frequently tight and painful in men with chronic prostatitis are the pubococcygeus, obturator internus, and piriformis. The perineal body and bulbospongiosus muscle are also frequently tender.",
        incorrectRationale: "The gluteus medius, which appears in three of the answers, is not a pelvic floor muscle. It does attach to the external surface of a pelvic bone (ilium), but it is not by definition a part of the pelvic floor. Interestingly, tender points of this muscle are a common finding in men with chronic prostatitis."
    },
    {
        id: 75,
        stem: "An elderly patient is being examined by the PT. The PT notes an irregular, dark-pigmented ulcer over the medial malleolus. The patient states this is not painful. The MOST LIKELY diagnosis is:",
        options: {
            A: "Arterial ulcer",
            B: "Diabetic ulcer",
            C: "Venous ulcer",
            D: "Arterial insufficiency"
        },
        correct: "C",
        correctRationale: "This patient is demonstrating signs and symptoms of a venous ulcer: irregular, dark pigmentation; usually shallow, and appearing on the distal lower leg (medial malleolus is the most common area). There is little pain associated with venous ulcers.",
        incorrectRationale: "Arterial ulcers also have irregular edges, but are not typically dark. They are painful, especially if the legs are elevated, and are common in the distal lower leg (toes, feet lateral malleolus, anterior tibial area). Diabetic ulcers are associated with arterial disease and peripheral neuropathy. They appear in locations where arterial ulcers appear, and are typically not painful. Signs and symptoms of arterial insufficiency include decreased or absent pulses and pale color. Intermittent claudication is common in early disease, whereas in late stages, patients exhibit rest pain and ischemia."
    },
    {
        id: 76,
        stem: "A patient with COPD is sitting in a bedside chair. The apices of the lungs in this position compared with other areas of the lungs in this position would demonstrate:",
        options: {
            A: "Increased volume of air at REEP",
            B: "The highest changes in ventilation during the respiratory cycle",
            C: "Increased perfusion",
            D: "The lowest oxygenation and highest carbon dioxide content in blood exiting this zone"
        },
        correct: "A",
        correctRationale: "The gravity-independent area of the lung in the upright sitting position refers to the apices of the lungs, which house the most air at resting end expiratory pressure (REEP). The gravity-dependent area of the lungs in the upright sitting position refers to the bases of the lungs, which will house the most pulmonary perfusion. The relative increase in blood in the pulmonary capillaries around the alveoli in the bases results in less room for air in those alveoli. Because there is a relative decrease in blood in the pulmonary capillaries around the alveoli in the apices, there is more room for air.",
        incorrectRationale: "The apices of the lungs in that position have the least perfusion because of the effects of gravity on blood flow. The apices also have the smallest change in ventilation during the respiratory cycle because they are the most full at rest, and that area has the least ROM of the thorax. The apices of the lung have the highest oxygenation and lowest carbon dioxide content as a result of the small blood volume that passes by these alveoli."
    },
    {
        id: 77,
        stem: "An elderly patient is referred to physical therapy following a recent compression fracture at T8. The medical history includes osteoporosis and gastroesophageal reflux disease (GERD). The patient is currently taking antacids. Which of the following is MOST important for the therapist to consider in the POC?",
        options: {
            A: "Schedule therapy sessions at least 90 minutes after eating",
            B: "Recommend an over-the-counter proton pump inhibitor (PPI) medication",
            C: "Include sit-ups in supine to strengthen abdominals",
            D: "Ensure that the patient eats a small snack before starting exercise"
        },
        correct: "A",
        correctRationale: "Gastric contents reflux into the esophagus in GERD. Scheduling therapy at least 90 minutes after eating reduces the possibility of food remaining in the stomach and aggravating the esophagus during therapy.",
        incorrectRationale: "Concentric abdominal exercises (sit-ups) are contraindicated in recent thoracic compression fractures. Eating right before a therapy session may aggravate GERD. Recommending a medication change is outside the scope of a PT."
    },
    {
        id: 78,
        stem: "In a patient demonstrating early lift-off during the preswing phase of gait, the mobility of which joints of the ankle and foot are important for assessing the ability to maintain forward progression of the foot?",
        options: {
            A: "Talocrural and first metatarsophalangeal joints",
            B: "Talocrural and talonavicular joints",
            C: "Subtalar and talonavicular joints",
            D: "Subtalar and first metatarsophalangeal joints"
        },
        correct: "A",
        correctRationale: "The primary motions of the talocrural and first metatarsophalangeal joints are plantarflexion and dorsiflexion in the sagittal plane. Normal forward progression of the ankle and foot during late stance period (terminal stance and preswing) requires ankle and great toe dorsiflexion.",
        incorrectRationale: "The primary motions of the talonavicular and subtalar joints are pronation and supination in the frontal plane. Although important for normal gait, deficits in the frontal plane do not limit forward progression."
    },
    {
        id: 79,
        stem: "An elderly patient with a transfemoral amputation is having difficulty wrapping the residual limb. The PT's BEST course of action is to:",
        options: {
            A: "Apply a temporary prosthesis immediately",
            B: "Consult with the vascular surgeon about the application of an Unna's paste dressing",
            C: "Use a shrinker",
            D: "Redouble efforts to teach proper Ace bandage wrapping"
        },
        correct: "C",
        correctRationale: "A shrinker is a suitable alternative to elastic wraps. It is important to select the right size shrinker to limit edema and accelerate healing.",
        incorrectRationale: "An Unna's paste dressing is applied at the time of initial surgery. Use of a temporary prosthesis should be a prosthetic team decision and is based on additional factors such as age, balance, strength, cognition, and so forth. Continuing to teach elastic bandage wrapping may be inefficient and ultimately fruitless, since the patient is elderly."
    },
    {
        id: 80,
        stem: "A patient is being treated for secondary lymphedema of the right arm as a result of a radical mastectomy and radiation therapy. The resulting edema (stage 1) can BEST be managed in physical therapy by:",
        options: {
            A: "Isometric exercises, extremity positioning in elevation, and compression bandaging",
            B: "Intermittent pneumatic compression, extremity elevation, and massage",
            C: "AROM and extremity positioning in a functional arm/hand position",
            D: "Isokinetics, extremity positioning in elevation, and massage"
        },
        correct: "B",
        correctRationale: "Lymphedema after surgery and radiation is classified as secondary lymphedema. Stage 1 means that there is pitting edema that is reversible with elevation. The arm may be normal size first thing in the morning, with edema developing as the day goes on. It can be effectively managed by external compression and extremity elevation. Manual lymph drainage (massage and PROM) are also appropriate interventions.",
        incorrectRationale: "Exercise and positioning alone would not provide the needed lymph drainage; isometric exercise is contraindicated."
    },
    {
        id: 81,
        stem: "A patient has a 2-year history of ALS and exhibits moderate functional deficits. The patient is still ambulatory with bilateral canes, but is limited in endurance. An important goal for the physical therapy POC should be to prevent:",
        options: {
            A: "Overwork damage in weakened, denervated muscle",
            B: "Further gait deterioration as a result of ataxia",
            C: "Further functional loss as a result of myalgia",
            D: "Radicular pain and paresthesias"
        },
        correct: "A",
        correctRationale: "ALS is a progressive degenerative disease that affects both upper and lower motor neurons. An important early goal of physical therapy is to maintain the patient's level of conditioning while preventing overwork damage in denervated muscle (lower motor neuron injury).",
        incorrectRationale: "Myalgia is common in lower motor neuron lesions. It can be ameliorated but not prevented. Ataxia and radicular pain are not associated with ALS."
    },
    {
        id: 82,
        stem: "A PT decides to use the Dynamic Gait Index (DGI) to examine a patient's gait. The DGI evaluates and documents a patient's ability to:",
        options: {
            A: "Maintain consistency of gait in a structured environment",
            B: "Safely navigate the home environment",
            C: "Safely navigate the community environment",
            D: "Modify gait in response to changing task demands"
        },
        correct: "D",
        correctRationale: "The DGI is an instrument designed to evaluate and document a patient's ability to modify gait in response to changing task demands (e.g., gait speed, head turns, pivot turns, step over and around obstacles, steps).",
        incorrectRationale: "The DGI is a clinical test of mobility. It is not used in the community environment nor was it developed to obtain information about gait in the home environment. It is used to evaluate adaptability of gait, not consistency."
    },
    {
        id: 83,
        stem: "During initial standing, a patient with chronic stroke is pushing strongly backward, displacing the center of mass at or near the posterior limits of stability. The MOST LIKELY cause of this is:",
        options: {
            A: "Contraction of the hip extensors",
            B: "Spasticity of the tibialis anterior",
            C: "Spasticity of the gastrocnemius-soleus",
            D: "Contracture of the hamstrings"
        },
        correct: "C",
        correctRationale: "The muscles of the foot and ankle move the long lever of the body forward and backward (ankle strategy). The gastrocnemius-soleus moves the body backward, and the anterior tibialis moves the body forward. Post-stroke, spasticity of the gastrocnemius-soleus and weakness of the anterior tibialis are common.",
        incorrectRationale: "Action of the hip extensors would result in a backward lean, with the center of motion occurring at the hip (hip strategy). Contracture of the hamstrings increases knee flexion and forward trunk lean. Spasticity occurs in lower extremity antigravity extensor muscles, not the anterior tibialis."
    },
    {
        id: 84,
        stem: "A patient presents with decreased ankle dorsiflexion range of motion following a repair of the Achilles tendon that is now well healed. Which joint, in addition to the talocrural joint, should be assessed as a likely contribution to the restricted range?",
        options: {
            A: "Subtalar joint",
            B: "Tibiofibular joint",
            C: "Cuboid-navicular joint",
            D: "Calcaneo-cuboid joint"
        },
        correct: "B",
        correctRationale: "The distal tibiofibular joint must separate slightly with ankle dorsiflexion in order to allow the wider anterior aspect of the talus to pass between the articulating surfaces of the malleoli.",
        incorrectRationale: "None of the other joints contribute significantly to ankle dorsiflexion range of motion."
    },
    {
        id: 85,
        stem: "An elderly and frail individual is receiving physical therapy in the home environment to improve general strengthening and mobility. The patient has a 4-year history of taking nonsteroidal anti-inflammatory drugs (NSAIDs) such as aspirin for joint pain, and recently began taking a calcium channel blocker (verapamil). The PT examines the patient for possible adverse reactions/side effects that could include:",
        options: {
            A: "Increased sweating, fatigue, chest pain",
            B: "Weight increase, hyperglycemia, hypotension",
            C: "Stomach pain, bruising, confusion",
            D: "Paresthesias, incoordination, bradycardia"
        },
        correct: "C",
        correctRationale: "With advanced age, the capacity of the individual to break down and convert drugs diminishes (secondary to decreased liver and kidney function, reduced hepatic and renal blood flow, etc.). Some drugs additionally slow metabolism (e.g., calcium channel blockers like verapamil and diltiazem or antigout drugs like allopurinol). NSAIDs are associated with potential gastrointestinal (GI) effects (stomach pain, peptic ulcers, GI hemorrhage), peripheral edema and easy bruising and bleeding. NSAIDs can also lessen the effects of antihypertensive drugs. Central nervous system (CNS) effects can include headache, dizziness, lightheadedness, insomnia, tinnitus, confusion, and depression.",
        incorrectRationale: "The other choices are not expected adverse reactions."
    },
    {
        id: 86,
        stem: "A PTA becomes aware that her supervising therapist is having a consensual sexual relationship with a current male outpatient under the supervisor's care. What is the BEST course of action for the PTA?",
        options: {
            A: "Report any concerns to the human resources department",
            B: "Immediately report the situation to the state licensing board",
            C: "Approach the supervising therapist emphasizing her concerns about this behavior",
            D: "Do nothing as the behavior is consensual and not occurring on the hospital premises"
        },
        correct: "A",
        correctRationale: "Physical therapists and physical therapist assistants are obligated to report any caregivers that engage in sexual activity with their patient or clients. It is unethical and unlawful for a PT or PTA to have such a sexual relationship, even if consensual. The human resources department would be able to gather pertinent information and perhaps confront the therapist involved to have the relationship immediately cease and determine if the therapist knew it was illegal or unethical to carry out such an affair. The PTA fulfilled the obligation of reporting the situation.",
        incorrectRationale: "The PTA could have submitted a complaint to the state licensing board. There could be a time delay before the investigative arm of the board got around to the case. The evidence may have only been hearsay. Meanwhile, the relationship might have continued. If the human resources department had corroborated the situation it is possible that the therapist might have been fired and human resources (HR) could file a complaint with the board. Approaching the supervisor by the PTA could open a can of worms for the PTA."
    },
    {
        id: 87,
        stem: "A patient presents with a large plantar ulcer that will be debrided. The foot is cold, pale and edematous. The patient complains of dull aching, especially when the leg is in the dependent position. The condition that would most likely result in this clinical presentation is:",
        options: {
            A: "Acute arterial insufficiency",
            B: "DVT",
            C: "Chronic arterial insufficiency",
            D: "Chronic venous insufficiency"
        },
        correct: "D",
        correctRationale: "Venous ulcers typically present with minimal pain (dull aching). Venous congestion and aching are relieved by leg elevation. Chronic venous insufficiency is also characterized by thickening, coarsening and brownish pigmentation of the skin around the ankles. The skin is usually thin, shiny, and cyanotic.",
        incorrectRationale: "Arterial insufficiency typically presents with severe pain (claudication and in severe cases rest pain). The forefoot typically exhibits dependent rubor and pallor with decreased or absent pulses on elevation. Skin is typically cool, pale, and shiny."
    },
    {
        id: 88,
        stem: "It is most important for the physical therapist to educate a client who recently had a radial lymph node dissection secondary to prostate cancer to:",
        options: {
            A: "Use a home compression pump with pressures > 80 mm Hg",
            B: "Routinely perform circumferential measurements of both lower extremities",
            C: "Closely monitor any changes in the fitting of their socks or shoes",
            D: "Use alkaline soaps and cleansers on the skin."
        },
        correct: "C",
        correctRationale: "Seventy percent of mean after a radial lymph node resection for prostate cancer will develop lymphedema in one or both lower extremities and potentially the genitals. Early changes include a perception of heaviness of the limb and an inability to wear old socks or shoes due to tightness. These are often precursors to clinically significant swelling.",
        incorrectRationale: "Although circumferential measurements are important, they are not sensitive to small accumulations of lymphedema. Significant accumulation of lymphedema is recognized by greater than a 2.0 cm difference at one measurement point between upper extremity (UE) limbs and 1.0-1.5 cm difference between lower extremity (LE) limbs. Use of alkaline soaps will result in loss of normal pH of skin (slightly acidic), drying of the skin, and increased risk of bacterial infection due to breaks in skin. Use of compression pumps at pressures higher than 60mm Hg can cause damage to the lymphatic vessels."
    },
    {
        id: 89,
        stem: "Five days after an aortic valve replacement, a patient is diagnosed with a deep vein thrombosis (DVT). The patient was immediately started on an anticoagulant. What is the PT's BEST initial treatment option?",
        options: {
            A: "Early ambulation while wearing compression stockings",
            B: "Supine exercises as the patient will be kept on bed rest for a week",
            C: "Delay exercise as it is contraindicated at this time",
            D: "ADLs while sitting on the edge of the bed"
        },
        correct: "A",
        correctRationale: "To assist with venous return and decrease edema, pain, and clot extension, compression stockings are used. Early ambulation is permitted after adequate anticoagulation with low-molecular-weight heparin (LMWH).",
        incorrectRationale: "The other choices do not adequately address the patient's problem. The patient should not be kept on strict bed rest nor should treatment be deferred (both choices contribute to venous stasis). ADL in sitting is permitted but does not address the central problem of lower extremity venous stasis."
    },
    {
        id: 90,
        stem: "Researchers examined the benefits of strength training on functional performance in older adults. The data analysis involved a meta-analysis. This refers to:",
        options: {
            A: "Pooling of data of all available studies to yield a larger sample",
            B: "Pooling of data of RCTs to yield a larger sample",
            C: "A mechanism to critically evaluate studies",
            D: "Data analysis performed by the Cochrane collaboration"
        },
        correct: "B",
        correctRationale: "Meta-analysis refers to pooling of data of RCTs to yield a larger sample. Meta-analysis provides a mechanism for quantitative systematic review.",
        incorrectRationale: "Non-RCTs (case-control studies, case reports) are excluded. The Cochrane Collaboration is one source of meta-analysis reviews. Critically evaluating systematic reviews is a separate process."
    },
    {
        id: 91,
        stem: "A factory worker injured the right arm in a factory press with damage to the ulnar nerve at the elbow. A diagnostic electromyogram (EMG) was performed 3 weeks after the injury, with evidence of spontaneous fibrillation potentials. In this case, the PT recognizes that:",
        options: {
            A: "Reinnervation is in process",
            B: "Reinnervation is complete",
            C: "Neurapraxia has occurred",
            D: "Denervation has occurred"
        },
        correct: "D",
        correctRationale: "Spontaneous fibrillation potentials and positive sharp waves present on EMG 2-3 weeks after injury are evidence of denervation. This occurs with axonotmesis, a class 2 peripheral nerve injury (PNI) with axonal damage and Wallerian degeneration distal to the lesion.",
        incorrectRationale: "Polyphasic motor units of low amplitude and short duration are evidence of reinnervation. Neurapraxia is a class 1 PNI with local compression or blockage. EMG typically reveals no spontaneous activity."
    },
    {
        id: 92,
        stem: "A young adult develops patellofemoral pain syndrome (PFPS) after starting a new exercise class. Which combination of static and dynamic postural alignment tests and measures would be of GREATEST benefit in identifying potential abnormal patellofemoral joint biomechanics?",
        options: {
            A: "Patellar baja and hop test",
            B: "Q-angle and step-down test",
            C: "Patella alta and heel raise",
            D: "Genu recurvatum and single leg stance"
        },
        correct: "B",
        correctRationale: "The Q-angle is a static postural alignment measure commonly assessed in patients with PFPS. Increased hip adduction and femoral internal rotation during the test is associated with increased risk for PFPS.",
        incorrectRationale: "Patella baja and patella alta have weak associations with PFPS. The hop test is most commonly used following ACL rupture or repair. Genu recurvatum and performing a heel raise or single leg stance may all provide useful information related to lower extremity and knee biomechanics but are not the primary test and measures associated with PFPS."
    },
    {
        id: 93,
        stem: "A 16-year-old patient with osteosarcoma is being seen in physical therapy for crutch training. The parents have decided not to tell their child about the diagnosis. The patient is quite perceptive, and asks the PT directly if it is cancer. The PT's BEST course of action is to:",
        options: {
            A: "Tell the patient to speak directly with the physician",
            B: "Discuss the cancer with the patient, gently acknowledging the parents' fears",
            C: "Change the subject and discuss the plans for that day's treatment",
            D: "Schedule a conference with the physician and family about these questions"
        },
        correct: "D",
        correctRationale: "The most appropriate strategy is to hold a conference with the physician and family and discuss the patient's questions. Everyone interacting with this patient should be answering questions in the same way. A direct and honest approach is best, but must be consistent with the parents' wishes because this patient is a minor child.",
        incorrectRationale: "The other choices in this scenario do not address the issue at hand effectively or respect the patient's or parents' concerns."
    },
    {
        id: 94,
        stem: "A 6-year-old boy has a diagnosis of Duchenne's muscular dystrophy, with more than a third of lower extremity muscles graded less than 3/5. The child is still ambulatory with assistive devices for short distances. The MOST appropriate activity to include in his POC would be:",
        options: {
            A: "Recreational physical activities such as swimming",
            B: "30 minutes of circuit training using resistance training and conditioning exercises",
            C: "Wheelchair sports",
            D: "Progressive resistance strength training at 80% maximum vital capacity"
        },
        correct: "A",
        correctRationale: "Exercise at low to moderate intensities is the general rule for patient with muscular dystrophy. Because of the young age of this child, exercise should be fun. Recreational exercise (swimming) satisfies this requirement and should be helpful in maintaining functional level as long as possible. At 6 years of age, wheelchair confinement is not usual.",
        incorrectRationale: "Muscle with grades of 3 or less will not benefit from active or resistive exercise. Progressive resistance strength training and circuit training can be harmful at high intensities, producing overwork injury. Wheelchair sports is not applicable for a 6-year-old child."
    },
    {
        id: 95,
        stem: "A patient who is 3 months' post-CVA is being treated in physical therapy for adhesive capsulitis of the right shoulder. Today, the patient complains of new symptoms, including constant burning pain in the right upper extremity that is increased by the dependent position and touch. The right hand is mildly edematous and stiff. In this case, the intervention that is CONTRAINDICATED is:",
        options: {
            A: "Positional elevation, compression and gentle massage to reduce edema",
            B: "Stress loading using active compression during upper-extremity weight-bearing activities",
            C: "Passive manipulation and ROM of the shoulder",
            D: "AROM exercises of the limb within a pain-free range to regain motion"
        },
        correct: "C",
        correctRationale: "This patient is demonstrating early signs of complex regional pain syndrome (CRPS) type I (formerly known as reflex sympathetic dystrophy). These changes typically begin up to 10 days after injury. Passive manipulation and ROM of the shoulder can further aggravate the patient's sympathetically maintained pain.",
        incorrectRationale: "In type I CRPS, all of the other treatments can be used."
    },
    {
        id: 96,
        stem: "An appropriate fine motor behavior that should be established by 9 months of age is the ability to:",
        options: {
            A: "Build a tower of four blocks",
            B: "Pick up a raisin with a fine pincer grasp",
            C: "Transfer objects from one hand to another",
            D: "Hold a cup by the handle while drinking"
        },
        correct: "C",
        correctRationale: "Transferring objects from one hand to another is a task developmentally appropriate for an 8-or 9-month-old.",
        incorrectRationale: "A fine pincer grasp is an 11-month skill and stacking 2 blocks is a 12-15 month skill, while stacking 6 blocks is a 16-24 month skill. Holding a cup by the handle while drinking usually occurs by 12 months of age."
    },
    {
        id: 97,
        stem: "An 11-year-old was referred to physical therapy with complaints of vague pain at the right hip and thigh that radiated to the knee. AROM is restricted in abduction, flexion and internal rotation. A gluteus medius gait was observed with ambulation for 100 feet. The BEST choice for PT intervention is:",
        options: {
            A: "Orthoses to control lower extremity position as the result of femoral anteversion",
            B: "Closed-chain partial weight-bearing lower extremity exercises for slipped capital femoral epiphysis",
            C: "Open-chain strengthening of the right hip abductors and internal rotators for avascular necrosis of the hip",
            D: "Hip joint mobilization to improve the restriction in motion as the result of Legg-Calve-Perthes disease"
        },
        correct: "B",
        correctRationale: "This patient is exhibiting signs and symptoms of slipped capital femoral epiphysis, characterized by a gluteus medius gait. Closed-chain exercises with weight bearing to tolerance will help regain or maintain functional muscular strength and normal motion.",
        incorrectRationale: "The signs and symptoms are consistent with slipped capital femoral epiphysis and not any of the other conditions. Avascular necrosis of the femoral head (osteochondritis dissecans) involves the necrosis and separation of a small segment of the subchondral bone from the femoral head (epiphysis). The hip is painful upon weight bearing. Legg-Calve-Perthes disease (osteochondrosis of the femoral head) produces a painful hip with limited motion in abduction and internal rotation. Deformity (flattening) of the femoral head is a complication. Femoral anteversion occurs when the femoral neck is directed anteriorly when the knee is directed anteriorly."
    },
    {
        id: 98,
        stem: "While under the care of a babysitter, a child unfortunately sat down in spilled pool chemicals, and when the child's diaper was later removed, chemical burns were present. The BEST terms to characterize the burn depicted in the figure are:",
        options: {
            A: "Deep, partial-thickness burn wound extending into fascia, muscle, and bone.",
            B: "Full-thickness burn wound",
            C: "Superficial partial-thickness burn wound with scar formation",
            D: "Superficial burn wound"
        },
        correct: "B",
        correctRationale: "This is a full-thickness burn wound. It is characterized by white (ischemic) and black (charred) areas. Skin is parchment-like, leathery, and dry. Full-thickness burns heal with skin grafting and scarring.",
        incorrectRationale: "Partial-thickness burns are bright pink or red with a wet surface and blisters. This injury extends beyond the superficial skin (pink or red burn with no blisters). Superficial burns heal with minimal to no scarring. There is no indication that this burn extends down to the bone."
    },
    {
        id: 99,
        stem: "A middle-aged adult is running a marathon race and collapses well short of the finish line. Ambient temperature is 92°F, and body temperature is measured at 101°F. This individual has a rapid pulse and rapid respirations. Skin feels warm and dry. When questioned by the PT who is helping monitor the runners, the individual is confused. The therapist recognizes that these findings are consistent with:",
        options: {
            A: "Hypervolemic shock",
            B: "Septic shock",
            C: "Anaphylactic shock",
            D: "Hypovolemic shock"
        },
        correct: "D",
        correctRationale: "This individual is demonstrating signs and symptoms of dehydration (inadequate fluid intake) and hypovolemic shock. Pulse and respirations are increase; blood pressure (BP) may decline. Restlessness, anxiety, and confusion may also be present.",
        incorrectRationale: "Hypervolemia is an abnormal increase in the volume of circulating blood. Anaphylactic shock is a severe hypersensitivity (allergic reaction) to a substance with symptoms of local allergen-antibody interaction (hives, edema, warmth, erythema) as well as systematic symptoms of flushing, wheezing, dyspnea, and anxiety. Septic shock (sepsis) is a systematic inflammatory response to infection characterized by fever, tachycardia, tachypnea, and organ failure."
    },
    {
        id: 100,
        stem: "A patient is able to walk independently with an assistive device in the hall outside the PT gym. When asked to walk across the hospital lobby and through a revolving door, the patient slows down considerably and stops by the revolving door, unable to proceed. The therapist determines:",
        options: {
            A: "Open skills and externally paced skills are impaired while closed skills are intact",
            B: "Co-incident timing is impaired while open and closed skills are intact",
            C: "Serial skills are intact while continuous skills are impaired",
            D: "Both open and closed skills are impaired"
        },
        correct: "A",
        correctRationale: "Open motor skills are movement skills that can be performed in a variable, changing environment. Externally paced skills must comply with timing demands from the environment (e.g., walking through a revolving door).",
        incorrectRationale: "Closed motor skills are movement skills that are performed in a stable, nonchanging environment. Serial skills are movements that combine a series of discrete elements, with a specific order of elements. Continuous skills are movement skills that appear to have no recognizable beginning or inherent beginning and end."
    },
        {
        id: 101,
        stem: "A patient with a T4 SCI is being measured for a wheelchair. In determining the correct seat height, the PT can use as a measure:",
        options: {
            A: "Clearance between the floor and the foot plate of at least 2 inches",
            B: "The patient's leg length measurement plus inches",
            C: "Clearance between the floor and the foot plate of at least 4 inches",
            D: "The distance from the bottom of the shoe to just under the thigh at the popliteal fossa"
        },
        correct: "A",
        correctRationale: "The correct measure for seat height in a wheelchair is 2 inches clearance between the floor and the foot plate, measured from the lowest point on the bottom of the footplate.",
        incorrectRationale: "Leg measurement from the popliteal fossa to heel with customary footwear in place is used to determine footrest length on the wheelchair, not correct seat height. Clearance of 4 inches is too high."
    },
    {
        id: 102,
        stem: "A patient suffered carbon monoxide poisoning from a work-related factory accident, and is left with permanent damage to the basal ganglia. Intervention for this patient will need to address expected impairments of:",
        options: {
            A: "Impaired sensory organization of balance with the use of standing balance platform training",
            B: "Muscular spasms and hyperreflexia with the use of ice wraps",
            C: "Motor planning with the use of guided and cued movement",
            D: "Motor paralysis with the use of free weights to increase strength"
        },
        correct: "C",
        correctRationale: "The basal ganglia functions to convert general motor activity into specific, goal-directed action plans. Dysfunction results in problems with motor planning and scaling of movements and postures. Patients benefit from initial guided movement and task-specific training. Proprioceptive, tactile, and verbal cues can also be used prior to and during a task to enhance movement.",
        incorrectRationale: "The other listed deficits are not seen with basal ganglia disorders. Paralysis, hypertonicity and hyperreflexia occur with upper motor neuron lesions (corticospinal tract involvement). Problems with sensory organization and selection can occur with traumatic brain injury and stroke, and in children with cerebral palsy, Down syndrome, and learning disabilities."
    },
    {
        id: 103,
        stem: "A patient sustained a fracture of the proximal humerus, which has healed well. Upon examination, the therapist notes limitation in active shoulder flexion. The scapula protracts, elevates and upwardly rotates early and elevates excessively when the patient attempts to lift the arm. The NEXT thing the PT should do is:",
        options: {
            A: "Manual muscle test of serratus anterior and rhomboids",
            B: "Large-amplitude oscillations performed at the end-range of joint play for the glenohumeral inferior and posterior capsule",
            C: "Passive shoulder flexion and glenohumeral accessory mobility testing",
            D: "Manual resistance exercise for the supraspinatus and infraspinatus"
        },
        correct: "C",
        correctRationale: "Based on the information given, the NEXT thing the PT should do is determine what is causing the impairments so that the PT can target treatment to the tissue(s) at fault. Limitation of active shoulder flexion can be due to weakness (less than 3/5 strength) of any of the following muscles: deltoid, supraspinatus, serratus anterior and upper trapezius. However, the loss of active shoulder flexion could also be due to capsular restrictions. A patient who sustained a proximal humerus fracture and resulting immobilization would likely have a capsular restriction as well as muscle atrophy. One must determine the primary impairment in the limitation of active shoulder flexion. Performing passive shoulder flexion and glenohumeral accessory mobility testing will help determine the tissue(s) at fault. If full passive ROM is found, further testing of individual muscles is necessary to determine which muscles to strengthen. If there are restrictions in passive shoulder flexion and capsular restrictions, a program including joint mobilization is appropriate.",
        incorrectRationale: "Manual muscle test of serratus anterior and rhomboids. Certainly, restricted shoulder flexion could be due to weakness in the serratus anterior. However, a weak serratus anterior would result in retraction of the scapula and possible winging, not protraction and upward rotation of the scapula. In addition, the rhomboids are downward rotators, retractors and elevators of the scapula. In this scenario, the scapula upwardly rotated and protracted, two actions that are antagonistic to rhomboid action. Therefore, weakness of the rhomboids would not be a concern. Manual resistance exercises for the supraspinatus and infraspinatus. This treatment would be appropriate for weakness of the rotator cuff. This is incorrect, since there is not enough information to begin treatment (no indication that the loss of ROM and excessive scapular motion are due to rotator cuff weakness). Large amplitude oscillations performed at the end-range of joint play for the glenohumeral inferior and posterior capsule. This treatment would be appropriate for capsular restrictions. This is incorrect, as there is not enough information to begin treatment (no indication that the loss of ROM and excessive scapular motion are due to capsular restriction)."
    },
    {
        id: 104,
        stem: "A patient with breast cancer had a surgical removal of the mass, followed by 12 weeks of chemotherapy (six treatments) and 8 weeks of radiation therapy (daily). She is referred to physical therapy for mobilization of her upper extremity. The PT recognizes that in providing postradiation therapy, it is important to:",
        options: {
            A: "Observe skin care precautions",
            B: "Avoid stretching exercises that pull on the radiated site",
            C: "Avoid all aerobic exercise for at least 2 months",
            D: "Observe infection control procedures"
        },
        correct: "A",
        correctRationale: "Immediate effects of radiation include skin effects (erythema, edema, dryness, itching, hair and fingernail loss, and loose skin). The PT should observe skin care precautions (avoid topical use of alcohol and drying agents and avoid positioning the patient directly on the radiated area). Exposure to heat modalities is also contraindicated.",
        incorrectRationale: "Although postradiation patients are more susceptible to infection due to immunosuppression, there is no evidence of infection in this patient (fever is often the 1st sign). Stretching exercises are important during and after radiation. Low-to-moderate-intensity aerobic exercise is appropriate."
    },
    {
        id: 105,
        stem: "A patient diagnosed with lumbar spinal root impingement due to narrowing of the intervertebral foramen has been referred to physical therapy for mechanical traction. What is the lowest percentage of body weight that should be considered for the initial traction force when using a split table?",
        options: {
            A: "25%",
            B: "50%",
            C: "15%",
            D: "55%"
        },
        correct: "A",
        correctRationale: "In order to overcome the coefficient of friction of the body moving horizontally over the surface of a table, the traction force should be at least 25% of the body weight when using a split table, or 50% when using a non-split table. To achieve joint distraction, a force of 50% body weight is recommended. However, because it is the initial traction, a minimum of 25% for the 1st treatment is recommended to determine patient response.",
        incorrectRationale: "Forces above 50% are generally not recommended for the lumbar spine."
    },
    {
        id: 106,
        stem: "While evaluating the gait of a patient with right hemiplegia, the PT notes foot drop during mid-swing on the right. The MOST LIKELY cause of this deviation is:",
        options: {
            A: "Decreased proprioception of foot-ankle muscles",
            B: "Inadequate contraction of the ankle dorsiflexors",
            C: "Excessive extensor synergy",
            D: "Excessive flexor synergy."
        },
        correct: "B",
        correctRationale: "Weakness or delayed contraction of the ankle dorsiflexors or spasticity in the ankle plantarflexors may cause foot drop during midswing.",
        incorrectRationale: "Excessive extensor synergy would cause plantarflexion during stance. Decreased proprioception of the foot-ankle muscles would cause difficulties with foot placement and balance during stance. A strong flexor synergy can cause dorsiflexion with hip and knee flexion during swing."
    },
    {
        id: 107,
        stem: "A patient has a transtibial amputation and has recently been fitted with a patellar tendon-bearing (PTB) socket. During initial prosthetic checkout, the PT instructs the patient to walk several times in the parallel bars, and then sit down and take off the prosthesis. Upon inspection of the skin, the PT would expect no redness in the area of the:",
        options: {
            A: "Anterior tibia and tibial crest",
            B: "Medial tibial and fibular plateaus",
            C: "Medial and lateral distal ends of the residual limb",
            D: "Patellar tendon and tibial tuberosity"
        },
        correct: "A",
        correctRationale: "In a PTB socket, relief is provided for pressure-sensitive areas: the anterior tibia and tibial crest, fibular head, and fibular (peroneal) nerve.",
        incorrectRationale: "All the other choices are considered pressure-tolerant areas."
    },
    {
        id: 108,
        stem: "A patient with brittle (uncontrolled) diabetes mellitus is being seen in physical therapy for a prosthetic checkout. The patient begins to experience lethargy, vomiting and abdominal pain. The PT notes weakness with some confusion, and suspects:",
        options: {
            A: "Ketoacidosis",
            B: "Lactic acidosis",
            C: "Respiratory acidosis",
            D: "Renal acidosis"
        },
        correct: "A",
        correctRationale: "An insulin deficiency in a patient with diabetes leads to the release of fatty acids from adipose cells with a production of excess ketones by the liver (diabetic ketoacidosis [DKA]). Signs and symptoms include alterations in GI function (anorexia, nausea and vomiting, abdominal pain), neural function (weakness, lethargy, malaise, confusion, stupor, coma, depression of vital functions), cardiovascular function (peripheral vasodilation, decreased HR, cardiac dysrhythmias), skin (warm and flushed) and increased rate and depth of respiration. The PT should report these changes immediately; the patient is in need of immediate intravenous insulin, fluid and electrolyte replacement solutions.",
        incorrectRationale: "The other choices do not have a similar pattern of signs and symptoms. Respiratory acidosis is caused by inadequate ventilation and the retention of carbon dioxide. Renal acidosis is the result of kidney failure, with accumulation of phosphoric and sulfuric acids. Lactic acidosis is an accumulation of lactic acid in the blood due to tissue hypoxia, exercise, hyperventilation or some drugs."
    },
    {
        id: 109,
        stem: "A 12-year-old has been referred to a physical therapy clinic for treatment of patellar tendinitis. The examination reveals that the patient is unable to hop on the affected lower extremity because of pain. The PT decides to refer the patient back to the pediatrician for an x-ray of the knee. The patient returns for therapy with the x-ray shown in the figure. The therapist's initial intervention should focus on:",
        options: {
            A: "Iontophoresis using dexamethasone and patient education regarding avoidance of squatting and jumping activities",
            B: "Patient education regarding avoiding falls onto the affected knee, and open-chain knee, extension exercises to improve quadriceps strength",
            C: "Fitting the patient with crutches for non-weight-bearing ambulation and initiation of hydrocortisone phonophoresis",
            D: "Aggressive plyometric exercises with focus on endurance training."
        },
        correct: "A",
        correctRationale: "The dysfunction observed on the x-ray is Osgood-Schlatter disease. The radiograph depicts epiphysitis of the continued explosive contractions of the quadriceps muscle complex during pubescent growth spurts. Patient education should focus on controlling knee-loading activities such as squatting and jumping. Iontophoresis using dexamethasone (a corticosteroid) provides a safe mechanism to deliver local anti-inflammatory medication.",
        incorrectRationale: "Explosive contractions of the quadriceps complex should be avoided. Ambulation and AROM activities maintain mobility while the structure heals. Phonophoresis would be contraindicated because it may be painful to move the sound head over the affected area. In addition, US should be used with precaution over open epiphyses. Open-chain knee extension exercise may aggravate symptoms due to the increased load at the attachment of the patellar tendon to the tibial tuberosity."
    },
    {
        id: 110,
        stem: "The navicular drop test in weight bearing can be utilized clinically in the examination of:",
        options: {
            A: "Tendon injury to the tibialis anterior muscle",
            B: "Motion across the longitudinal axis of the midtarsal joint",
            C: "Integrity of the dorsal talonavicular ligament",
            D: "Medial longitudinal arch collapse"
        },
        correct: "D",
        correctRationale: "The navicular drop test is a measurement of the difference in navicular height in millimeters from standing subtalar joint neutral to standing relaxed foot posture and is used clinically as a composite measure (indicator) of excessive foot pronation. Collapse of the medial longitudinal arch is typically associated with excessive rearfoot and midfoot pronation.",
        incorrectRationale: "The dorsal talonavicular ligament is a relatively thin, wide band attaching from the dorsal talar neck and running distally to the dorsal surface of the navicular bone. It supports the capsule of the talonavicular joint. There is no known clinical test to assess the integrity of the ligament. Midtarsal joint motion along its descriptive longitudinal axis is thought to be primarily associated with inversion and eversion motions in which the axis for this motion passes through the navicular bone. The navicular drop test is not utilized to assess midtarsal longitudinal motions. The tibialis anterior attaches to the dorsal surface of the first cuneiform and base of the 1st metatarsal and acts to dorsiflex the ankle and assists in inversion of the foot. While it potentially could offer some limited restraint to foot pronation, the navicular drop test is not utilized to test the integrity of the tibialis anterior tendon."
    },
    {
        id: 111,
        stem: "A PT is examining a child with a history of primary lymphedema of the right lower extremity that was diagnosed at birth. Thickening of skinfolds of the toes is evident. The PT documents these findings as:",
        options: {
            A: "Dermal backflow",
            B: "Pitting edema",
            C: "Positive stemmer's sign",
            D: "Secondary edema"
        },
        correct: "C",
        correctRationale: "Stemmer's sign is positive for lymphedema in the presence of a thickened cutaneous fold of skin over the dorsal proximal toes or fingers. There is an inability or difficulty lifting up or pinching the skin in this area. It appears in the late stages of lymphedema.",
        incorrectRationale: "Pitting edema is present in early stage I (reversible) lymphedema, while during stage II pitting is difficult to induce due to the presence of fibrotic tissue. Dermal backflow refers to the movement of a tracer substance back down the limb during a lymphoscintigram. The scenario clearly rules out secondary edema since the history is indicative of primary lymphedema."
    },
    {
        id: 112,
        stem: "During a physical therapy session, an elderly woman with low back pain tells the PT that she has had urinary incontinence for the last year. It is particularly problematic when she has a cold and coughs a lot. She has not told her physician about this problem because she is too embarrassed. The therapist's BEST course of action is to:",
        options: {
            A: "Refer the patient back to the physician",
            B: "Examine the patient, document impairments and discuss findings with the physician",
            C: "Examine the patient, document impairments and then refer her back to her physician",
            D: "Examine the patient and proceed with treatment for low back pain"
        },
        correct: "B",
        correctRationale: "The PT should complete the examination of the patient, adequately document the findings, and determine the PT diagnosis. Although many states have direct access laws that permit physical therapy intervention without referral, most insurance companies, including Medicare (affecting the patient in this example), require a physician referral in order for services to be reimbursed. Thus, the PT needs to demonstrates stress incontinence, a problem that could be successfully treated with PT (e.g., Kegel's exercise and other interventions).",
        incorrectRationale: "The other choices do not offer successful resolution for her problems. The PT is not being an active advocate for the patient in dealing with the incontinence."
    },
    {
        id: 113,
        stem: "A PT receives a referral for a patient with neurapraxia involving the ulnar nerve secondary to an elbow fracture. Based on knowledge of this condition, the therapist expects that:",
        options: {
            A: "Regeneration is unlikely because surgical approximation of the nerve ends was not performed",
            B: "Nerve dysfunction will be rapidly reversed, generally in 2-3 weeks",
            C: "Regeneration is likely after 12-18 months",
            D: "Regeneration is likely in 6-8 months"
        },
        correct: "B",
        correctRationale: "Neurapraxia is a mild peripheral nerve injury (conduction block ischemia) that causes transient loss of function. Nerve dysfunction is rapidly reversed, generally within 2-3 weeks. An example is a compression injury to the radial nerve from falling asleep with the arm over the back of a chair (Saturday night palsy).",
        incorrectRationale: "If the nerve is cut, the distal part degenerates (Wallerian degeneration). Regeneration (nerve growth and repair) is dependent upon intact Schwann cell and continuity of the nerve pathway. Regrowth is at the rate of 1-4 mm/d. in this case, the nerve injury was not severe enough to initiate regeneration."
    },
    {
        id: 114,
        stem: "A patient who is to undergo surgery for a chronic shoulder dislocation asks the PT to explain the rehabilitation following a scheduled surgical reconstructive procedure. What is the therapist's BEST response?",
        options: {
            A: "Explain how patients typically respond to the surgery and outline the progression of exercises",
            B: "Tell the patient to ask the surgeon for information about the procedure and appropriate rehabilitation.",
            C: "Explain in detail about the surgical procedure",
            D: "Refer the patient to a physical therapy clinical specialist who is an expert on shoulder reconstructive rehabilitation"
        },
        correct: "A",
        correctRationale: "Assess the needs of the patient and provide appropriate information. The PT is well qualified to provide information on the expected rehabilitation process.",
        incorrectRationale: "Do not 'pass the buck' unless the information is outside of the scope of the therapist's expertise. Refer the Guide for Professional Conduct, Appendix B, Chapter 12, Professional Judgment."
    },
    {
        id: 115,
        stem: "A patient with metabolic syndrome is participating in a circuit-training program involving both aerobics and strength training. The therapist notices that the patient is sweating and having difficulty concentrating on an activity and coordinating movements. When asked if there is a problem, the patient is confused and has difficulty speaking. The therapist should:",
        options: {
            A: "Sit the patient down and administer fruit juice immediately",
            B: "Reschedule the patient at another time",
            C: "Discontinue the exercises and refer the patient back to the physician",
            D: "Discontinue the exercises and rest the patient"
        },
        correct: "A",
        correctRationale: "Metabolic syndrome (prediabetic state) is characterized by central obesity, insulin resistance, and dyslipidemia. Individuals with metabolic syndrome may develop hypertension and reactive hypoglycemia (as in this case) in response to exercise. Signs and symptoms of hypoglycemia include difficulty concentrating and speaking, confusion and developing incoordination. The therapist should sit the patient down and administer fruit juice immediately.",
        incorrectRationale: "All other choices do not address the problem of hypoglycemia. Action should be taken immediately to stabilize glucose levels."
    },
    {
        id: 116,
        stem: "A patient was referred to physical therapy complaining of loss of cervical AROM. X-rays showed degenerative joint disease (DJD) at the uncinated processes in the cervical spine. The motion that would be MOST restricted would be:",
        options: {
            A: "Extension",
            B: "Rotation",
            C: "Side-bending",
            D: "Flexion"
        },
        correct: "C",
        correctRationale: "The uncinated processes (joints of Luschka) are located at the inferolateral aspect of the lower cervical vertebrae. Side-bending is lost with degenerative changes at the joint that the uncinated process makes with the vertebra below.",
        incorrectRationale: "Other motion is restricted, but to a lesser degree. Review the joints of Luschka in the Review and Study Guide if necessary."
    },
    {
        id: 117,
        stem: "A PT receives a referral to ambulate a patient who is insulin-dependent. In a review of the patient's medical record, the PT notices that the blood glucose level for that day is 310 mg/dL. The PT's BEST course of action is to:",
        options: {
            A: "Postpone therapy and consult with the medical staff as soon as possible",
            B: "Ambulate the patient as planned, but monitor closely for signs of exertional intolerance",
            C: "Talk to the nurse about walking the patient later that day after lunch",
            D: "Refrain from ambulating the patient; reschedule for tomorrow before other therapies"
        },
        correct: "A",
        correctRationale: "Normal fasting plasma glucose is less than 115 mg/dL, while a fasting plasma glucose level greater than 126 mg/dL on more than one occasion is indicative of diabetes. This patient is hyperglycemic with high glucose levels (>= 250 mg/dL). Clinical signs that may accompany this condition include ketoacidosis (acetone breath) with dehydration, weak and rapid pulse, nausea/vomiting, deep and rapid respirations (Kussmaul's respirations), weakness, diminished reflexes, and paresthesias. The patient may be lethargic and confused, and may progress to diabetic coma and death if not treated promptly with insulin. Physical therapy intervention is contraindicated; exercise can lead to further impaired glucose uptake. Coordination with the medical staff is crucial, so that the patient's blood glucose levels can be appropriately managed.",
        incorrectRationale: "Ambulation is contraindicated. Postponing consultation with the medical staff is potentially dangerous for the patient."
    },
    {
        id: 118,
        stem: "A patient with a complete spinal cord injury (SCI) at the T6 level is being discharged home after 2 months of rehabilitation. In preparation for discharge, the rehabilitation team visits the home and finds three standard height steps going into his home. A ramp will have to be constructed for wheelchair access. The recommended length of this ramp should be:",
        options: {
            A: "252 inches (21 feet)",
            B: "192 inches (16 feet)",
            C: "60 inches (5 feet)",
            D: "120 inches (10 feet)"
        },
        correct: "A",
        correctRationale: "The architectural standard for rise of a step is 7 inches (steps may vary from 7-9 inches). The recommended ratio of slope to rise is 1:12 (an 8% grade). For every inch of vertical rise, 12 inches of ramp will be required. A straight ramp will have to be 252 inches, or 21 feet, long.",
        incorrectRationale: "The other choices do not adequately account for the 1:12 ratio (8% grade)."
    },
    {
        id: 119,
        stem: "A patient is receiving immunosuppressants (cyclosporine) following renal transplantation. Referral to physical therapy is for mobility training using crutches. Initial examination reveals paresthesias in both lower extremities, with peripheral weakness in both hands and feet. The PT determines that the patient is MOST LIKELY experiencing:",
        options: {
            A: "Myopathy",
            B: "Peripheral neuropathy",
            C: "Leukopenia",
            D: "Quadriparesis"
        },
        correct: "B",
        correctRationale: "This patient is experiencing peripheral neuropathy, as evidenced by the paresthesias and distal weakness in both hands and feet.",
        incorrectRationale: "Whereas myopathy may be a potential adverse effect of immunosuppression, it would not present as symmetrical distal weakness with paresthesias. Quadriparesis can also occur with immunosuppression, but would present with spasticity and more widespread paresis. Leukopenia is an abnormal decrease in the number of white blood cells, and can also occur with immunosuppression."
    },
    {
        id: 120,
        stem: "A patient was referred for physical therapy after a right breast lumpectomy with axillary lymph node dissection. Scapular control is poor when upper extremity flexion or abduction is attempted. Early PT intervention should focus on:",
        options: {
            A: "Gravity-assisted right upper extremity exercises to promote scapular control following damage to the long thoracic nerve",
            B: "Strengthening of the right deltoids to help stabilize the shoulder, which compensates for damage to the dorsal scapular nerve",
            C: "Active assistive pulley exercises to assist rotator cuff muscles following damage to the suprascapular nerve",
            D: "Strengthening of the right rhomboid to promote normal function of the scapula as a result of damage to the dorsal scapular nerve"
        },
        correct: "A",
        correctRationale: "With axillary dissection, the long thoracic nerve may be damaged. This leads to serratus anterior weakness and loss of scapular control. Gravity-assisted exercises to promote scapular control should be emphasized early in rehabilitation to help restore proper scapular humeral rhythm.",
        incorrectRationale: "Because the dysfunction is associated with scapular control, the rotator cuff and deltoid muscles would not be involved. The rhomboids are important for scapular control, but they are innervated by the dorsal scapular nerve, which is not typically injured during the surgical procedure stated."
    },
    {
        id: 121,
        stem: "A patient recovering from stroke is having difficulty bearing weight on the left leg. The patient is unable to advance the tibia forward and abbreviates the end of the stance phase on the left going directly into swing phase. The MOST LIKELY cause of the patient's problem is:",
        options: {
            A: "Weakness or contracture of hip extensors",
            B: "Spasticity of the anterior tibialis muscle",
            C: "Spasticity or contracture of the plantarflexors",
            D: "Weakness or contracture of the dorsiflexors"
        },
        correct: "C",
        correctRationale: "Forward advancement of the tibia from midstance to heel-off is controlled by eccentric contraction of the plantarflexors; from heel-off to toe-off, the plantarflexors contract concentrically. Either spasticity or contracture of the plantarflexors would limit this forward progression. Patients compensate by going right into swing, typically with a circumducted gait or with increased hip and knee flexion because there is no push-off.",
        incorrectRationale: "Spasticity or contracture of the dorsiflexors is typically not seen, and could not cause this deficit. Weakness of the hip extensors would be evident at heel strike, with a backward lean of the trunk."
    },
    {
        id: 122,
        stem: "During initial examination, a patient is unable to transfer from wheelchair to mat even though the PT is providing adequate instructions and verbal cueing. During an assisted transfer, the patient is unable to participate and doesn't seem to get the whole idea of the transfer. The therapist determines that the patient may be presenting with:",
        options: {
            A: "Ideomotor apraxia",
            B: "Dyssynergia",
            C: "Ideational apraxia",
            D: "Cognitive inattention"
        },
        correct: "C",
        correctRationale: "Ideational apraxia refers to an inability to perform a purposeful motor act, either automatically or upon command. It is a failure in the conceptualization of the task.",
        incorrectRationale: "Ideomotor apraxia refers to an inability to perform a purposeful motor act on command while retaining the ability to perform the task automatically. Dyssynergia refers to impaired ability to associate muscles together for complex movement (decomposition of movement). Cognitive inattention refers to an inability to select and attend to a specific stimulus while simultaneously suppressing extraneous stimuli."
    },
    {
        id: 123,
        stem: "A physical therapist and a PT student at a pediatric clinic are reviewing precautions and contraindications regarding various pediatric pathologies. The precaution with the MOST credibility that merits discussion is:",
        options: {
            A: "Do not use active exercise with children with muscular dystrophy",
            B: "Do not do PROM with children with osteogenesis imperfecta (OI)",
            C: "Do not do PROM with children with arthrogryposis multiplex congenita",
            D: "Limit sensory input with children with autism"
        },
        correct: "B",
        correctRationale: "Those with OI (fragile bones) are very susceptible to fractures. PROM as well as traction to any long bones is contraindicated.",
        incorrectRationale: "One can actively exercise those with MD; however, do not over-exercise these children because damage to muscle fibers can result in permanent damage and decline in function. PROM with children with arthrogryposis is indicated because contractures are one of their main issues. Limiting sensory input for some children with autism is appropriate; however, for others the treatment strategy that is best is to increase sensory inputs."
    },
    {
        id: 124,
        stem: "A 14-year-old boy with advanced Duchenne's muscular dystrophy is administered a pulmonary function test. The value that is UNLIKELY to show any deviation from normal is:",
        options: {
            A: "Functional residual capacity",
            B: "Forced expiratory volume in 1 second (FEV1)",
            C: "Vital capacity",
            D: "Total lung capacity"
        },
        correct: "A",
        correctRationale: "Because muscular dystrophy does not change the lung parenchyma, resting end expiratory pressure (REEP) will occur at the same point of equilibrium between lung recoil and thoracic outward pull. Therefore, functional residual capacity will not change.",
        incorrectRationale: "Muscular dystrophy will alter the respiratory muscles' ability to pull in air and blow out air; therefore, vital capacity, total lung capacity and FEV1 will be decreased."
    },
    {
        id: 125,
        stem: "A patient has been referred to physical therapy for acute shoulder pain after shoveling snow in a driveway for 2 hours. Positive findings include pain and weakness with flexion of an extended upper extremity as well as scapular winging with greater than 90° of abduction. The patient's problem is MOST LIKELY the result of:",
        options: {
            A: "Compression of the long thoracic nerve",
            B: "Subdeltoid bursitis",
            C: "Supraspinatus tendinitis",
            D: "Compression of the suprascapular nerve"
        },
        correct: "A",
        correctRationale: "Vigorous upper limb activities can cause inflammation of soft tissues surrounding the shoulder, resulting in compression of the long thoracic nerve and weakness of the serratus anterior. The serratus anterior stabilizes the scapula with greater than 90° of abduction.",
        incorrectRationale: "Supraspinatus tendinitis or weakness does not result in scapular winging. The supraspinatus muscle in concert with the deltoids initiates abduction in the upper extremity. Subdeltoid bursitis causes pain with all AROM and does not result in scapular winging."
    },
    {
        id: 126,
        stem: "A patient is referred to physical therapy for vestibular rehabilitation. The patient presents with spontaneous nystagmus that can be suppressed with visual fixation, oscillopsia, and loss of gaze stabilization. Additional postural findings include intense disequilibrium, and an ataxic wide-based gait with consistent veering to the left. Based on these findings, the PT determines that the patient is MOST LIKELY exhibiting signs and symptoms of:",
        options: {
            A: "Benign paroxysmal positional vertigo (BPPV)",
            B: "Acute unilateral vestibular dysfunction",
            C: "Acoustic neuroma",
            D: "Meniere's disease"
        },
        correct: "B",
        correctRationale: "This patient is presenting with classic signs and symptoms of unilateral vestibular dysfunction. An abnormal vestibular ocular reflex (VOR) produces nystagmus (involuntary cyclical movements of the eye), loss of gaze stabilization during head movements, and oscillopsia (an illusion that the environment is moving). Abnormal vestibulospinal function produces impairments in balance and gait. Veering to one side is indicative of unilateral vestibular dysfunction (in this case, the left side).",
        incorrectRationale: "BPPV is associated with episodic vertigo, nausea, blurred vision and autonomic changes that occur with head movement, and typically stop within 30 seconds once the head is static. Acoustic neuroma is a benign tumor affecting CN VIII, and is associated with progressive hearing loss, tinnitus and disequilibrium. Meniere's disease is associated with symptoms of nausea and vomiting, episodic vertigo, and fullness in the ear with low-frequency hearing loss."
    },
    {
        id: 127,
        stem: "A diagnosis of bicipital tendinitis has been made following an evaluation of a patient with shoulder pain. The BEST shoulder position to expose the tendon of the long head of the biceps for application of phonophoresis would be:",
        options: {
            A: "Medial rotation and abduction",
            B: "Lateral rotation and extension",
            C: "Abduction",
            D: "Horizontal adduction"
        },
        correct: "B",
        correctRationale: "The long head of the biceps is best exposed in shoulder lateral rotation and extension, due to its attachment at the supraglenoid tubercle of the scapula, which is at the medial aspect of the shoulder joint.",
        incorrectRationale: "Medial rotation and abduction places the long head of the biceps deep to the anterior deltoid and pectoralis major muscles. The anterior surface of the shoulder, including the long head of the biceps, loses exposure with horizontal adduction."
    },
    {
        id: 128,
        stem: "A PT is working with a client who fractured the left fibula 3 months ago. The client is still having pain with exercise. Based on the recent radiograph pictured and the given information, the prognosis for this client is:",
        options: {
            A: "A bone stimulator or surgery will be required",
            B: "This fracture will require an immobilizer boot for healing",
            C: "Non-weight bearing is indicated for complete healing",
            D: "Healing is proceeding normally"
        },
        correct: "A",
        correctRationale: "Normally, radiographic evidence of healing is present within 2-6 weeks (soft callus phase). This radiograph represents a nonunion fracture. A nonunion is a fracture that will not heal, and there are no signs of bone repair over a period of 3 consecutive months (bridging and callus formation are absent). Typical causes of non-union fractures include infection, inadequate mobilization, poor blood supply, and muscle or some type of tissue interpositioned between the fractured segments. The distal tibia is more frequently the site of nonunion fractures in the long bones of the lower extremity, due to a sometimes inadequate blood supply.",
        incorrectRationale: "If there were bridging or a callus formation, but less than expected, then it would be classified as a delayed union fracture. A delayed union is characteristic of a fracture that has not healed within the expected time frame, and there is evidence that it will heal given time and the right environment. In the case of delayed union, a bone stimulator, change in weight-bearing status and/or the use of an immobilizer boot for the leg may be needed. A fibular fracture typically does not restrict weight bearing status because this is a non-weight bearing bone."
    },
    {
        id: 129,
        stem: "A newborn with whole arm paralysis is referred for physical therapy. INITIALLY, the plan of care (POC) should include:",
        options: {
            A: "Passive mobilization of the shoulder in overhead motions",
            B: "Partial immobilization of the limb across the abdomen, followed by gentle ROM after immobilization",
            C: "Splinting the shoulder in abduction and internal rotation",
            D: "Age-appropriate task training of the upper extremity"
        },
        correct: "B",
        correctRationale: "Paralysis of the upper limb typically results from a traction injury at birth, causing a brachial plexus injury. Variations include Erb-Duchenne or Erb's paralysis (affecting C5-C6 roots), whole arm paralysis (affecting C5-T1 roots), and Klumpke's paralysis (affecting the lower plexus nerve roots, C8, and T1). Partial immobilization of the limb across the abdomen followed by gentle ROM is the best choice for initial intervention.",
        incorrectRationale: "Mobilization in overhead motions is contraindicated. Splinting the shoulder in abduction leads to formation of abduction contractures and later hypermobility of the shoulder. Age-appropriate task training can follow after the initial treatment."
    },
    {
        id: 130,
        stem: "A patient diagnosed with lumbar spondylosis without discal herniation or bulging has a left L5 neural compression. The most likely structure compressing the nerve root is the:",
        options: {
            A: "Ligamentum flavum",
            B: "Posterior longitudinal ligament",
            C: "Anterior longitudinal ligament",
            D: "Supraspinous ligament"
        },
        correct: "A",
        correctRationale: "The ligamentum flavum becomes hypertrophied with lumbar spondylosis and may invade the intervertebral foramen, compressing the left L5 spinal nerve root.",
        incorrectRationale: "The supraspinous ligament and anterior longitudinal ligaments are unlikely to compress any neurological structures based on their anatomical locations. The posterior longitudinal ligament is so small and centrally located in the lower lumbar region that it is not able to compress a spinal nerve (actually more likely to compress the spinal cord [i.e., cauda equine])."
    },
    {
        id: 131,
        stem: "An elderly individual is referred to physical therapy for a fall risk assessment following two falls in the home. The patient's timed up and go (TUG) score is 33 seconds. Based on these results the therapist determines that the patient's fall risk is:",
        options: {
            A: "Moderate based on poor sensory adaptation responses",
            B: "High based on an abnormal score",
            C: "Low based on a mildly abnormal score",
            D: "Moderate based on a mildly abnormal score"
        },
        correct: "B",
        correctRationale: "The TUG test records the time it takes for an individual to stand up, walk 3 m, turn, return to the chair, turn and sit down. Most adults can complete the test in 10 seconds; scores between 11 and 20 are normal for frail elderly; scores over 30 are indicative of impaired functional mobility and high risk for falls.",
        incorrectRationale: "A score of 33 seconds is not low or moderately abnormal."
    },
    {
        id: 132,
        stem: "During an exercise tolerance test (ETT), a patient demonstrates a poor reaction to increasing exercise intensity. An absolute indication for terminating this test is:",
        options: {
            A: "1.5 mm of downsloping ST segment depression",
            B: "Onset of moderate to severe angina",
            C: "Supraventricular tachycardia",
            D: "Fatigue and shortness of breath"
        },
        correct: "B",
        correctRationale: "According to the American College of Sports Medicine, an absolute indication for terminating an exercise bout is the onset of moderate to severe angina. Other absolute indications include acute MI, a drop in systolic BP with increasing workload, serious arrhythmias (second-or third-degree heart blocks, sustained ventricular tachycardia or premature ventricular contractions, atrial fibrillation with fast ventricular response), unusual or severe shortness of breath, CNS symptoms (ataxia, vertigo, confusion), or patients request.",
        incorrectRationale: "The other choices (fatigue, 1.5 mm downsloping ST segment and supraventricular tachycardia) are considered relative indications and would require close monitoring."
    },
    {
        id: 133,
        stem: "When conducting the anterior drawer stress test at the ankle one week following acute inversion injury, the physical therapist is attempting to test mechanical stability provided primarily by the:",
        options: {
            A: "Calcaneofibular ligament",
            B: "Distal anterior tibiofibular ligament",
            C: "Lateral talocalcaneal ligament",
            D: "Anterior talofibular ligament"
        },
        correct: "D",
        correctRationale: "The anterior talofibular ligament (ATFL) provides the main restraint to anterior lateral translation of the talus within the mortise. Passive anterior translation of the talus is performed in 20° of plantarflexion. Excessive anterior translation of the talus during an anterior drawer test is considered indicative of significant laxity or rupture of the ATFL, and the test appears to be the most useful when performed within 4-7 days of the initial injury.",
        incorrectRationale: "The calcaneofibular ligament acts as the primary restraint to inversion when the ankle is in neutral or dorsiflexion and limits talar tilt. Testing of lateral talar tilt would be performed when attempting to examine integrity of the calcaneofibular ligament. The lateral talocalcaneal ligament is associated with stability of the talocalcaneal (subtalar joint) and would not offer significant restraint to motions of the talus within the mortise joint. The anterior tibiofibular ligament stabilizes the distal tibiofibular joint and would not offer restraint to anterior translation of the talus."
    },
    {
        id: 134,
        stem: "A patient with an 8-year history of Parkinson's disease (PD) is referred for physical therapy. During the initial examination, the patient demonstrates significant rigidity, decreased PROM in both upper extremities in the typical distribution and frequent episodes of akinesia. The exercise intervention that BEST deals with these problems is:",
        options: {
            A: "Quadruped position, upper extremity proprioceptive neuromuscular facilitation (PNF) D2 flexion and extension",
            B: "Sitting, PNF bilateral symmetrical upper extremity D2 flexion patterns, rhythmic initiation",
            C: "Modified plantigrade, isometric holding, stressing upper extremity shoulder flexion",
            D: "Resistance training, free weights for shoulder flexors at 80% of one repetition maximum"
        },
        correct: "B",
        correctRationale: "The patient with PD typically develops elbow flexion, shoulder adduction contractures of the upper extremities, along with a flexed, stooped posture. Bilateral symmetrical upper extremity PNF D2F patterns encourage shoulder flexion and abduction, with elbow extension and upper trunk extension (all needed motions).",
        incorrectRationale: "Both quadruped and modified plantigrade positions encourage postural flexion. The patient needs exercises to improve postural flexibility and AROM, not strength of shoulder flexors."
    },
    {
        id: 135,
        stem: "There is strong evidence linking certain drugs to increased fall risk in older adults. Patients should be cautioned about fall risk when taking:",
        options: {
            A: "Levodopa",
            B: "Elavil",
            C: "Raloxifene",
            D: "Baclofen"
        },
        correct: "B",
        correctRationale: "Psychotherapeutic drugs (e.g., tricyclic antidepressants such as Elavil) reduce alertness and slow central processing, thereby increasing fall risk. Other medications linked to increased risk of falls include antihypertensives (especially vasodilators), antiarrhythmics, diuretics, and analgesics (especially opiods).",
        incorrectRationale: "The other choices are not primarily associated with increased fall risk in the same way."
    },
    {
        id: 136,
        stem: "A patient has been diagnosed with acute synovitis of the temporomandibular joint. Early intervention should focus on:",
        options: {
            A: "Temporalis stretching and joint mobilization",
            B: "Application of an intraoral appliance and phonophoresis",
            C: "Instruction to eat a soft food diet and phonophoresis",
            D: "Joint mobilization and postural awareness"
        },
        correct: "C",
        correctRationale: "Phonophoresis and education regarding consumption of only soft food should help resolve the acute inflammatory process in the temporomandibular joint.",
        incorrectRationale: "Application of an intraoral appliance occurs only when the acute inflammation is not resolved or bruxism continues. Joint mobilization should not be attempted with an acute inflammation."
    },
    {
        id: 137,
        stem: "A patient has extensive full-thickness burns to the dorsum of the right hand and forearm, and is being fitted with a resting splint to support the wrists and hands in a functional position. The splint should position the wrist and hand in:",
        options: {
            A: "Slight wrist extension, with fingers supported and thumb in partial opposition and abduction",
            B: "Slight wrist flexion, with interphalangeal extension and thumb opposition",
            C: "Neutral wrist position, with slight finger flexion and thumb flexion",
            D: "Neutral wrist position, with interphalangeal extension and thumb flexion"
        },
        correct: "A",
        correctRationale: "It is important to recall that functional resting position is slight wrist extension, supported fingers in natural slightly flexed position, and thumb partially opposed to promote proper joint position for recovery and future hand use.",
        incorrectRationale: "The other choices do not place the hand in a functional position."
    },
    {
        id: 138,
        stem: "A PT observes genu recurvatum during ambulation in a patient with hemiplegia. The patient has been using a posterior leaf spring (PLS) orthosis since discharge from subacute rehabilitation 4 weeks ago. The therapist has previously administered the Fugl-Meyer Assessment of Physical Performance, and determined the lower extremity score to be 22 (of a possible 34), with strong synergies in the lower extremity and no out-of-synergy movement. The most likely cause of this deviation is:",
        options: {
            A: "Hamstring weakness",
            B: "Dorsiflexor spasticity",
            C: "Hip flexor weakness",
            D: "Extensor spasticity"
        },
        correct: "D",
        correctRationale: "A hyperextended knee can be caused by extensor spasticity, quadriceps weakness (a compensatory locking of the knee), or plantarflexion contractures or deformity. The most likely cause in this case is extensor spasticity, which is consistent with strong obligatory synergies (stage 3 recovery).",
        incorrectRationale: "Spasticity in dorsiflexors is atypical and would not cause knee hyperextension. Hip flexor and hamstring weakness would result in decreased lower extremity clearance during swing."
    },
    {
        id: 139,
        stem: "A PT is supervising the exercise of a cardiac rehabilitation outpatient class on a very hot day, with temperatures expected to be above 90°F. The class is scheduled for 2 p.m. and the facility is not air-conditioned. The BEST strategy is to:",
        options: {
            A: "Increase the warm-up period to equal the total aerobic interval in time",
            B: "Keep the same time of the exercise class because of scheduling requirements",
            C: "Shift to intermittent exercise but decrease the rest time",
            D: "Decrease the exercise intensity by slowing the pace of exercise"
        },
        correct: "D",
        correctRationale: "Clinical decisions should focus on reducing the environmental costs of exercising (change the time of day of the exercise class to reduce the heat stress) or reducing the overall metabolic costs of the activity (decrease the pace of exercise, add more rest periods).",
        incorrectRationale: "The other choices do not reduce the metabolic costs of the activity."
    },
    {
        id: 140,
        stem: "Patients diagnosed with Paget's disease typically have symptomatology similar to that of spinal stenosis. The MOST important aspect of physical therapy intervention is:",
        options: {
            A: "Strengthening exercise for the abdominals and back muscles",
            B: "Lumbar extension exercises",
            C: "Modalities to decrease pain",
            D: "Postural reeducation to prevent positions that increase symptoms"
        },
        correct: "D",
        correctRationale: "Patients should be educated to minimize certain positions for long periods. Symptoms resulting from Paget's disease are aggravated by positions in which the lumbar spine is in extension.",
        incorrectRationale: "Because this is a chronic condition, modalities are not the most effective management strategy. Lumbar extension exercises decrease the space within the vertebral foramen, thereby increasing symptoms of pain associated with stenosis and Paget's disease. Strengthening exercises for the abdominal and back muscles do not affect the disease processes of slowly progressive enlargement and deformity of multiple bones."
    },
    {
        id: 141,
        stem: "During clinical examination, the nonmodified Ober's test is BEST used to assess for loss of extensibility of the:",
        options: {
            A: "Psoas muscle",
            B: "Ischiofemoral ligament",
            C: "Posterior fibers of the gluteus maximus muscle",
            D: "Iliotibial band and tensor fascia lata muscle"
        },
        correct: "D",
        correctRationale: "Ober's test is used to assess the extensibility of the tensor fascia lata and iliotibial band and is performed with the patient in a side-lying position with the lower leg flexed at the hip and the knee for stability. The upper leg is passively abducted and slightly extended at the hip with the knee flexed to 90° (or extended). The examiner stabilizes the pelvis and allows the upper limb to slowly lower. The test is considered positive when the examined leg fails to lower beyond horizontal. The leg will remain abducted if the tensor fascia lata and iliotibial band are tight.",
        incorrectRationale: "The ischiofemoral ligament limits internal rotation in flexion and extension and would therefore not be assessed with Ober's test. The psoas is a flexor of the hip, and while it would be elongated with passive hip extension, it does not limit hip adduction, and therefore Ober's test would not be used to evaluate its extensibility. The posterior fibers of the gluteus maximus would be elongated during hip flexion and therefore not be assessed by Ober's test."
    },
    {
        id: 142,
        stem: "Following a total knee replacement (TKR), continuous passive motion (CPM) is initiated. One of the main objectives in using CPM in this case is to facilitate:",
        options: {
            A: "Active knee flexion",
            B: "Passive knee extension",
            C: "Active knee extension",
            D: "Passive knee flexion"
        },
        correct: "A",
        correctRationale: "Studies have shown that following a TKR, CPM significantly increases active knee flexion ability as compared with active knee extension or passive motions. The difference is significant 2 weeks' postsurgery.",
        incorrectRationale: "The other choices are not the focus of, nor do they derive the same benefits of CPM use."
    },
    {
        id: 143,
        stem: "A child with full-thickness burns to both arms is developing hypertrophic scars. The BEST initial intervention to manage these scars is:",
        options: {
            A: "Primary excision followed by autografts",
            B: "Application of occlusive dressings",
            C: "Application of custom-made pressure garments",
            D: "Application of compression wraps"
        },
        correct: "C",
        correctRationale: "Following burns, edema and hypertrophic scarring can be effectively controlled with custom pressure garments. Pressure should be maintained 23 hours per day, often for 6-12 months.",
        incorrectRationale: "Surgery (surgical release) is an option of last resort. Compression wraps (elastic bandages) and occlusive dressings have no impact on hypertrophic scarring."
    },
    {
        id: 144,
        stem: "A physical therapist is examining a patient with low back pain using a conventional ultrasound imager. The multifidi are in spasm because of pain. During the examination, the patient is asked to perform a concentric activity involving the multifidi. The expected US image of the cross-sectional area (thickness) of the muscle when compared to the resting state of the muscle would:",
        options: {
            A: "Change very little",
            B: "Significantly increase",
            C: "Significantly decrease",
            D: "Lengthen"
        },
        correct: "A",
        correctRationale: "If a muscle were in a hypertonic state (muscle spasm), one would expect little change in cross-sectional area (CSA) since the exercise engages a muscle that is already contracting to some extent.",
        incorrectRationale: "Normally, as a muscle concentrically contracts from its resting state, the CSA increases and the length decreases. A variety of factors can influence the CSA; e.g., longissimus invading the multifidus space), it may decrease or limit the CSA of the muscle being monitored; the angle of the transducer head can alter the dimensions of the muscle."
    },
    {
        id: 145,
        stem: "A patient's left knee is being tested using McMurray's test to assess meniscus integrity. During one of the portions of the test, the knee is taken from a position of flexion and internal rotation, into a position of extension and internal rotation. In the test's final position described above, the MOST ACCURATE description of the stresses placed on each meniscus is:",
        options: {
            A: "Compressive stress at the lateral and medial menisci",
            B: "Compressive stress at the lateral meniscus and tensile stress at the medial meniscus",
            C: "Tensile stress at the lateral meniscus and compressive stress at the medial meniscus",
            D: "Tensile stress at the lateral and medial menisci"
        },
        correct: "B",
        correctRationale: "In a combination of knee extension and internal rotation the menisci will move anteriorly during extension as they follow the tibia. In addition, the medial meniscus will move further anterior and the lateral meniscus will move posteriorly as they follow the femoral condyles during rotation. This specific combination will result in a tensile stress at the medial meniscus and a compressive stress at the lateral meniscus of a left knee.",
        incorrectRationale: "Tensile lateral and compressive medial stresses result from a combination of flexion and internal rotation. The stresses placed in each meniscus cannot be the same given the direction of forces."
    },
    {
        id: 146,
        stem: "While reviewing a patient's imaging films, the most appropriate imaging view to identify abnormal anatomy of the pars interarticularis in the lumbar region is:",
        options: {
            A: "Anteroposterior view",
            B: "Oblique view",
            C: "Lumbosacral view",
            D: "Lateral view"
        },
        correct: "B",
        correctRationale: "For the lumbar region, the oblique view will clearly demonstrate the pars interarticularis.",
        incorrectRationale: "The anteroposterior and lateral views will not demonstrate the pars interarticularis. The lateral view may show anterior displacement of the segment above a pars defect if the condition has progressed to a bilateral displaced fracture of the pars interarticularis (i.e., spondylolisthesis); however, the lateral view will not show the anatomy of the pars interarticularis."
    },
    {
        id: 147,
        stem: "Two PTs are asked to perform a test on the same group of patients using the Functional Independence Measure (FIM). The results of both sets of measurements reveal differences in the PTs' scores, but not in the repeat measurements. This is indicative of a problem in:",
        options: {
            A: "Concurrent validity",
            B: "Construct validity",
            C: "Interrater reliability",
            D: "Intrarater reliability"
        },
        correct: "C",
        correctRationale: "Interrater reliability is the degree to which two or more independent raters can obtain the same rating for a given variable. In this case, two therapists obtained different FIM scores for the same group of patients, indicating a problem in interrater reliability.",
        incorrectRationale: "Intrarater reliability is the consistency of an examiner on repeat tests. Issues of validity (Does the test measure what it says it measures?) are not relevant."
    },
    {
        id: 148,
        stem: "A patient presents with problems with swallowing. When the PT tests for phonation by having the patient say 'Ah' with the mouth open, there is deviation of the uvula to one side. The therapist then tests for function of the gag reflex and notices decreased response to stimulation. These findings suggest involvement of the:",
        options: {
            A: "Facial nerve",
            B: "Vagus nerve",
            C: "Trigeminal nerve",
            D: "Hypoglossal nerve"
        },
        correct: "B",
        correctRationale: "These are the tests to examine vagus nerve (CN X) function.",
        incorrectRationale: "The trigeminal nerve (CN V) has both sensory and motor components. Sensory tests include pain and light touch to forehead, cheeks and jaw along with light touch (cotton wisp) to cornea. Motor function involves testing the temporal and masseter muscle (patient clenches teeth and holds against resistance). The facial nerve (CN VII) is tested using motor tests: raise eyebrows, frown, show teeth, smile, close eyes tightly and puff out both cheeks. The hypoglossal nerve (CN XII) is testing using motor tests: tongue movements."
    },
    {
        id: 149,
        stem: "During an examination of a patient who complains of back pain, the PT notes pain with end-range active range of motion (AROM) into left hip flexion, abduction, and external rotation. The origin of the pain is MOST LIKELY the:",
        options: {
            A: "Capsule of the hip joint",
            B: "Sacroiliac (SI) joint",
            C: "Left kidney",
            D: "Sartorius muscle"
        },
        correct: "B",
        correctRationale: "Pain at end-range of flexion, abduction, external rotation, and extension (FABERE test) is diagnostic for SI joint dysfunction because it both gaps and compresses the joint.",
        incorrectRationale: "Pain at the midrange into hip flexion, abduction and external/lateral rotation suggests hip joint pathology. Patient reported low back pain, and if the sartorius or the hip were involved, the complaint of pain would have been reported in the anterior and medial thigh. Renal pain is often referred to the costovertebral region, flank, or lower abdominal quadrant."
    },
    {
        id: 150,
        stem: "A patient with peripheral vascular disease has been referred for conditioning exercise. The patient demonstrates moderate claudication pain in both legs following a 12-minute walking test. The MOST beneficial exercise frequency and duration for this patient is:",
        options: {
            A: "3 times/week, 60 minutes/session",
            B: "3 times/week, 30 minutes/session",
            C: "2 times/week, BID 20 minutes/session",
            D: "5 times/week, BID 10 minutes/session"
        },
        correct: "D",
        correctRationale: "Patients with vascular insufficiency and claudication pain should be encouraged to walk daily, 2 to 3 times/day. Duration should be short. The patient should walk to the point of maximum tolerable pain, and be allowed to rest.",
        incorrectRationale: "High intensity exercise (30- or 60-minute sessions, 3/week) is contraindicated. Twice-a-week sessions are too infrequent to be beneficial."
    },
    {
        id: 151,
        stem: "An elderly patient with diabetes is recovering from recent surgery to graft a large decubitus ulcer over the heel of the left foot. The PT is concerned that loss of range at the ankle (-5° to neutral) will limit ambulation and independent status. One afternoon, the therapist is very busy and requests that one of the physical therapy aides do the ROM exercises. The aide is new to the department but is willing to take on this challenge if the therapist demonstrates the exercises. The PT's BEST course of action is to:",
        options: {
            A: "Defer the ROM exercises and have the aide ambulate the patient in the parallel bars",
            B: "Reschedule the patient for the next day",
            C: "Perform the ROM exercises without delegating the task",
            D: "Take 5 minutes to instruct the aide in ROM exercises"
        },
        correct: "C",
        correctRationale: "The practice of using supportive personnel falls under the Code of Ethics and under the individual practice acts of the states. Delegated responsibilities should be commensurate with the qualifications (experience, education and training) of the individual to whom responsibilities are being assigned. In this case, it is not reasonable to assume that an aide, newly arrived to the PT department, has the knowledge or skills to do this treatment. The PT should do the ROM exercises.",
        incorrectRationale: "A brief orientation to ROM exercises is not adequate to ensure proper treatment. Deferral of the treatment or rescheduling does not address the concern about loss of ROM."
    },
    {
        id: 152,
        stem: "A postsurgical patient is receiving postural drainage, percussion and shaking to reduce pulmonary congestion. The PT assigned to the case could reduce the frequency of treatment if the:",
        options: {
            A: "Patient experiences an increase in postoperative pain",
            B: "Color of secretions changes from white to yellow",
            C: "Amount of productive secretions decreases",
            D: "Patient becomes febrile"
        },
        correct: "C",
        correctRationale: "The purpose of postural drainage is to help remove retained secretions. If the amount of secretions diminishes, this might be an indicator that the treatment has been successful and that the frequency of treatment can be reduced.",
        incorrectRationale: "The other choices indicate the patient's condition is worsening. Change of secretions from white to yellow (or green) suggests a developing pulmonary infection. An increase in temperature (febrile) also suggests infection (pulmonary, wound or urinary tract). If the patient reports an increase in postoperative pain, the patient would be unable to handle his/her secretions independent of the PT. All would be an indication to maintain the PT intervention, not decrease it."
    },
    {
        id: 153,
        stem: "A patient is referred for physical therapy following a fracture of the femur 6 months ago. The cast has been removed, but the patient is unable to volitionally contract the quadriceps. The PT decides to apply electrical stimulation to the quadriceps muscle. The BEST choice of electrode size and placement is:",
        options: {
            A: "Small electrodes, closely spaced",
            B: "Large electrodes, widely spaced",
            C: "Small electrodes, widely spaced",
            D: "Large electrodes, closely spaced"
        },
        correct: "B",
        correctRationale: "Large electrodes are used on large muscles in order to disperse the current (minimize current density under the electrode), enabling a more comfortable delivery of current. Widely spaced electrodes permit the current to travel deeper into the muscle to stimulate a greater number of deeper muscle fibers.",
        incorrectRationale: "The other choices do not meet these guidelines. Utilizing small electrodes would cause the current to be concentrated over a smaller surface area, thus increasing the current density under the electrode. Exceeding the current density of an electrode can cause the patient discomfort, skin irritation, or a thermal burn. Close spacing of electrodes encourages superficial flow of current, rather than deeper flow."
    },
    {
        id: 154,
        stem: "A frail older adult is confined to bed in a nursing facility and has developed a small superficial wound over the sacral area. Because only small amounts of necrotic tissue are present, the physician has decided to use autolytic wound debridement. This is BEST achieved with:",
        options: {
            A: "Sharp debridement",
            B: "Wet-to-dry gauze dressing with antimicrobial ointment",
            C: "Transparent film dressing",
            D: "Wound irrigation using a syringe"
        },
        correct: "C",
        correctRationale: "Autolytic wound debridement allows the body's natural enzymes to promote healing by trapping them under a synthetic, occlusive dressing. Moisture-retentive dressings are applied for short durations (<2 weeks). Choices include transparent film dressings or hydrocolloid or hydrogel dressings.",
        incorrectRationale: "The other interventions are wound management techniques; however, they are not autolytic."
    },
    {
        id: 155,
        stem: "A PT is teaching wheelchair skills to an adolescent with a recent SCI. The BEST motivational techniques to ensure full participation are to:",
        options: {
            A: "Provide structure and offer frequent feedback to ensure correct responses",
            B: "Limit anxiety by demonstrating the techniques to the best of the therapist's ability",
            C: "Treat the patient as an adult and incorporate the patient's goals into the POC",
            D: "Keep sessions short and allow time for frequent discussions"
        },
        correct: "C",
        correctRationale: "Adolescents prefer to be treated as adults. It is important to incorporate the patient's goals into the POC.",
        incorrectRationale: "Too much structure limits trial-and-error learning, which is superior for retention of skills. Length of practice sessions should be determined by the difficulty of the skill and ability of the patient. The PT is often the least successful model to demonstrate motor skills. Use an individual with a similar disability who has mastered the required skill (rehabilitation graduate)."
    },
    {
        id: 156,
        stem: "A patient is referred to physical therapy with complaints of weakness and unsteady gait. The patient had a kidney transplant 2 years ago. Medications included oral steroids and immunosuppression agents. Examination reveals decreased proprioception and strength 4/5 both lower extremities. Berg Balance Test score was 40/56. The MOST important action for the PT to take in this case is to:",
        options: {
            A: "Refer to a neurologist",
            B: "Refer the patient back to primary care provider",
            C: "Instruct in progressive resistive strengthening exercises",
            D: "Instruct in progressive balance exercises"
        },
        correct: "B",
        correctRationale: "Myopathy and neuropathy can develop, indicating rejection in a patient with a solid organ transplant in either the acute or the chronic stage. Given the onset of the new symptoms, reporting the changes and securing medical follow-up are the most important actions for the therapist.",
        incorrectRationale: "Although initiating an exercise program would be indicated, the stated balance exercises are at too low a level considering the Berg Balance score. Progressive resistance exercises would not be the exercise of choice due to possible rejection problems. Referral to a neurologist is not indicated."
    },
    {
        id: 157,
        stem: "A home health PT is treating an elderly patient. On this day, the patient is confused, with shortness of breath and generalized weakness. Given a history of hypertension and hyperlipidemia, the PT suspects the patient:",
        options: {
            A: "May be presenting with early signs of myocardial infarction",
            B: "Is exhibiting mental changes indicative of early Alzheimer's disease",
            C: "Forgot to take prescribed hypertension medication",
            D: "May be experiencing unstable angina"
        },
        correct: "A",
        correctRationale: "An elderly patient with a cardiac history may present with initial symptoms of mental confusion, the result of oxygen deprivation to the brain. The shortness of breath and generalized weakness may be due to generalized circulatory insufficiencies coexisting with the developing myocardial infarction (MI).",
        incorrectRationale: "Early Alzheimer's disease would not produce shortness of breath and generalized weakness. Chest pain would be evident with unstable angina. Hypertension is usually silent (asymptomatic). Occasionally, patients report headache."
    },
    {
        id: 158,
        stem: "In differentiating between stress urinary incontinence and urge incontinence, the therapist should first investigate:",
        options: {
            A: "Sensory exam of the lower extremities",
            B: "Precipitating factors such as exercise, cough, or laughter",
            C: "Presence of a cystocele",
            D: "Integrity of the pubourethral ligament"
        },
        correct: "B",
        correctRationale: "Stress incontinence occurs when exercising, coughing, sneezing, or laughing as intra-abdominal pressures increase.",
        incorrectRationale: "The pubourethral ligament maintains the relative position of the urethra to the urinary bladder; loosening of this ligament can result in bladder prolapse or herniation. A cystocele typically causes difficulty initiating voiding. Impaired sensation of the lower extremities reveals central or peripheral nerve dysfunction. Urge incontinence is the result of motor-detrusor instability."
    },
    {
        id: 159,
        stem: "An elderly patient has been hospitalized for the past 3 days with pneumonia. The physician and patient are hoping for a home discharge tomorrow. The patient lives with her sister in a first-floor apartment. The PT has determined that ambulation status is independent with rolling walker and endurance is only up to 15 feet, not enough to allow the patient to get from the bed to the bathroom (a distance of 20 feet). What should the therapist recommend?",
        options: {
            A: "Postponing her discharge until the patient can walk 20 feet",
            B: "A bedside commode and referral for home health services",
            C: "A skilled nursing facility placement until endurance increases",
            D: "Outpatient physical therapy until the patient's condition improves."
        },
        correct: "B",
        correctRationale: "Clinical decision-making in this case should focus on the patient's ability to manage in the home. Environmental modifications (the addition of a commode) and assistance of a home care aide should allow the patient to safely return home. Home physical therapy should focus on improving endurance to regain independence in the home. Treatment in the home is the most cost-effective in this case.",
        incorrectRationale: "Postponing discharge or placing the patient in a skilled nursing facility is not necessary. Patient does not have the mobility and endurance to attend outpatient therapy."
    },
    {
        id: 160,
        stem: "To prepare a patient with a complete T12 paraplegia (ASIA A) for ambulation with crutches, what upper quadrant muscles would be MOST important to strengthen?",
        options: {
            A: "Lower trapezius, latissimus dorsi, and triceps",
            B: "Deltoid, triceps, and wrist flexors",
            C: "Middle trapezius, latissimus dorsi, and triceps",
            D: "Upper trapezius, rhomboids, and levator scapulae"
        },
        correct: "A",
        correctRationale: "The upper quadrant muscles that are most important to strengthen for crutch gaits include the lower trapezius, latissimus dorsi, and triceps. Shoulder depression and elbow extension strength are crucial for successful crutch gait.",
        incorrectRationale: "The other choices include muscles not critical to swing-to or swing-through crutch gaits required by a patient with a complete SCI (ASIA A) at T12."
    },
    {
        id: 161,
        stem: "A patient sustained a T10 SCI (ASIA C) 4 years ago and is now referred for an episode of outpatient physical therapy. During initial examination, the physical therapist observes redness over the ischial seat that persists for 10 minutes when not sitting. The BEST intervention in this case would be to:",
        options: {
            A: "Switch to a tilt-in-space wheelchair",
            B: "Increase the wheelchair armrest height, which is adjustable",
            C: "Reemphasize the need for sitting push-ups performed every 15 minutes",
            D: "Switch to a low-density wheelchair foam cushion"
        },
        correct: "C",
        correctRationale: "Excessive ischial pressure and redness from prolonged sitting require an aggressive approach. Arm push-ups, at least every 15 minutes, are indicated if redness is present.",
        incorrectRationale: "High-density (not low-density) foam or gel cushions are used to relieve ischial pressure. Increasing the arm rest height increases the height of the push-up but does not address the frequency of push-ups needed. A tilt-in-space can relieve ischial pressure but is not typically ordered for SCI patients at the level of T10 unless mitigating factors prevent use of the upper extremities for pressure relief."
    },
    {
        id: 162,
        stem: "During a cervical spine examination, the PT observes restricted left rotation of the C7-T1 spinal level. After stabilizing the thoracic spine, the PT's hand placement for mobilization to improve left rotation should be at the:",
        options: {
            A: "Posterior left C6 articular pillar",
            B: "Tip of T1 spinous process",
            C: "Posterior right C7 articular pillar",
            D: "Posterior left C7 articular pillar"
        },
        correct: "C",
        correctRationale: "The most effective hand placement for mobilization into greater left rotation is at the posterior aspect of the right C7 articular pillar because it rotates the C7 vertebra to the left.",
        incorrectRationale: "Hand placement on the left of C6 or C7 articular pillars will promote right rotation. Hand placement on the T1 spinous process will create a posteroanterior glide, which will promote flexion at the T1-2 segment and extension at the C7-T1 segment."
    },
    {
        id: 163,
        stem: "A PT performs the slump test on a patient with a diagnosis of lumbar disc herniation whose complaint is pain in the posterior thigh. Which of the following findings would indicate a positive test result?",
        options: {
            A: "Pain in the lumbar spine region that is increased with cervical flexion",
            B: "Pain in the buttocks that is unchanged with head or ankle movement",
            C: "Pain in the posterior thigh that is relieved with cervical extension",
            D: "Pain in the posterior knee and calf that is relieved with ankle plantarflexion."
        },
        correct: "C",
        correctRationale: "A positive slump test is indicated by a reproduction of the patient's symptoms in the test position that is reduced or relieved by reducing tension on the nervous systems through movement of a body segment not directly affecting the joints or muscles in the location of the symptoms.",
        incorrectRationale: "The patient did not have complaints of lumbar, buttocks, knee, or calf pain. Therefore, eliciting these symptoms during testing is not a reproduction of the patient's symptoms and cannot be considered a positive test."
    },
    {
        id: 164,
        stem: "A patient who is recovering from a right CVA reports being thirsty and asks for a can of soda. The PT gives the patient the soda with instructions to open the can. The patient is unable to complete the task. Later, after the treatment session, when the patient is alone, the therapist observes the patient drinking from the can, having opened the can on his own. The therapist suspects the patient may have a primary deficit in:",
        options: {
            A: "Unilateral neglect",
            B: "Anosognosia",
            C: "Ideational apraxia",
            D: "Ideomotor apraxia"
        },
        correct: "D",
        correctRationale: "With ideomotor apraxia, a patient cannot perform a task upon command but can do the task when on his/her own.",
        incorrectRationale: "With ideational apraxia, a patient cannot perform the task at all. Unilateral neglect might lead the patient to ignore the can completely if positioned on his/her left side. Anosognosia is a more severe form of neglect, with lack of awareness and denial of the severity of one's paralysis."
    },
    {
        id: 165,
        stem: "An elderly and frail resident of an extended care facility presents with hot, red and edematous skin over the shins of both lower extremities. The patient also has a mild fever. The MOST LIKELY cause of the symptoms is:",
        options: {
            A: "Dermatitis",
            B: "Cellulitis",
            C: "Scleroderma",
            D: "Herpes simplex infection."
        },
        correct: "B",
        correctRationale: "Cellulitis is an inflammation of the cellular or connective tissue in or close to the skin. It is characterized by skin that is hot, red, and edematous. Fever is a common finding.",
        incorrectRationale: "Dermatitis produces red, weeping, crusted skin lesions, but is not commonly accompanied by fever. Location on shins makes herpes an unlikely choice, and there are no skin eruptions or vesicles. Scleroderma is a collagen disease producing tight, drawn skin."
    },
    {
        id: 166,
        stem: "Which of the following is a correct reason to terminate a maximum exercise tolerance test for a patient with pulmonary dysfunction?",
        options: {
            A: "Electrocardiogram (ECG) monitoring reveals heart rate (HR) increase and normal rhythm",
            B: "Patient reaches age-predicted maximal HR",
            C: "Patient exhibits dyspnea and a drop of 20 mm Hg in arterial oxygen pressure (PaO2)",
            D: "ECG monitoring reveals flat ST segment"
        },
        correct: "C",
        correctRationale: "A maximum exercise tolerance test is a sign- or symptom-limited test. Dyspnea with a drop of 20 mm Hg in PaO2 is an indication for stopping the test.",
        incorrectRationale: "Achieving age-adjusted predicted maximum HR is not a sign or symptom, and therefore does not stop the test. HR is expected to increase with normal rhythm. ST segment depression, not a flat ST segment, reveals ischemia and would be a reason to stop the test."
    },
    {
        id: 167,
        stem: "A patient with diagnosis of left-sided CHF, class II is referred for physical therapy. During exercise, this patient can be expected to demonstrate:",
        options: {
            A: "Weight gain with dependent edema",
            B: "Severe, uncomfortable chest pain with shortness of breath",
            C: "Dyspnea with fatigue and muscular weakness",
            D: "Anorexia, nausea with abdominal pain and distension"
        },
        correct: "C",
        correctRationale: "Left-sided heart failure is the result of the left ventricle failing to pump enough blood through the arterial system to meet the body's demands. It produces pulmonary edema and disturbed respiratory control mechanisms. Patients can be expected to demonstrate progressive dyspnea (exertional at first, then paroxysmal nocturnal dyspnea), fatigue and muscular weakness, pulmonary edema, cerebral hypoxia and renal changes.",
        incorrectRationale: "Severe chest pain and shortness of breath are symptoms of impending myocardial infarction (MI). The other choices describe symptoms associated with right-sided ventricular failure."
    },
    {
        id: 168,
        stem: "During a home visit, the mother of an 18-month-old child with developmental delay and an atrioventricular shunt for hydrocephalus tells the PT that her daughter vomited several times, was irritable and is now lethargic. The therapist's BEST course of action is to:",
        options: {
            A: "Call for emergency transportation and notify the pediatrician immediately",
            B: "Have the mother give the child clear liquids because she vomited",
            C: "Place the child in a side-lying position and monitor vital signs",
            D: "Give the child a cold bath to try to rouse her."
        },
        correct: "A",
        correctRationale: "These signs and symptoms could be the result of increased cerebral edema due to a clogged or infected shunt. Medical attention should be obtained immediately to avoid damage to the brain.",
        incorrectRationale: "The other choices do not adequately respond to this emergency situation."
    },
    {
        id: 169,
        stem: "As a result of a traumatic brain injury (TBI), a patient is unable to bring a foot up onto the next step during a training session on stair climbing. The PT's BEST course of action to promote learning of this task is to have the patient practice:",
        options: {
            A: "Marching in place in the parallel bars",
            B: "Step-ups onto a low step while in the parallel bars",
            C: "Standing up from half-kneeling",
            D: "Balance on the stairs while the therapist passively brings the foot up"
        },
        correct: "B",
        correctRationale: "Active task-specific practice of stepping using a low step represents the best choice to ensure motor learning.",
        incorrectRationale: "Passively bringing the foot up does not promote active learning. Marching in place and balance on stairs are appropriate lead-up skills to stair climbing, but are not task-specific practice."
    },
    {
        id: 170,
        stem: "During the initial examination of a client with an ulcer superior to the medial malleolus, the PT notes hemosiderosis and liposclerosis. There are no signs of infection, there is minimal drainage, granulation is present and the wound bed is clean except for a small amount of yellow fibrin deposits. The next action the therapist should take is:",
        options: {
            A: "Debride the wound with whirlpool irrigation.",
            B: "Apply an Unna boot",
            C: "Apply a four-layer bandaging system",
            D: "Perform an ankle brachial index (ABI)"
        },
        correct: "D",
        correctRationale: "The description of the wound is characteristic of a venous stasis ulceration, which is evident by the location (common site is superior to the medial malleolus), hemosiderosis (an accumulation of hemosiderin, a brown-colored pigment) and the liposclerosis (thickening of the tissue). Although this is a venous insufficiency wound, there could be a concomitant arterial disease, and before any type of compression therapy is applied (primary management for venous ulcerations), arterial perfusion must be assessed. The ABI is performed using a Doppler US and comparing the systolic pressure of the tibial or dorsalis pedis artery with that of the brachial artery. An ABI of 1 is normal.",
        incorrectRationale: "An ABI of 0.5-0.8 indicates signs of decreased arterial perfusion are present, and any compression therapies will be contraindicated. Applying a four-layer bandage system (e.g., Profore) or an Unna boot is an appropriate compression therapy if arterial disease is absent. Debriding the wound in this case is not necessary (small amounts of fibrin deposits are normal), and whirlpool irrigation is harmful to granulation. In addition, placing the limb in a dependent position may further aggravate the condition."
    },
    {
        id: 171,
        stem: "A patient presents with an enlargement in the neck in the area of the Adam's apple. The growth is resulting in difficulty while eating and episodes of dyspnea. The patient also has abnormal protrusion of the eyes. The therapist recognizes these symptoms are characteristic of:",
        options: {
            A: "Fibromyalgia",
            B: "Graves' disease",
            C: "Hyperparathyroidism",
            D: "Chronic autoimmune thyroiditis"
        },
        correct: "B",
        correctRationale: "Graves' disease is caused by excess secretion of thyroid hormone (hyperthyroidism) and produces a number of clinical manifestations. Difficulty eating, mild facial edema, and abnormal protrusion of the eyes (exophthalmos) are classic signs. Other symptoms can include heat intolerance, nervousness, weight loss, muscle weakness and fatigue, tremor, and palpitations.",
        incorrectRationale: "Chronic autoimmune thyroiditis (Hashimoto's disease) causes hypothyroidism. A number of clinical manifestations can occur, including muscle weakness and fatigue. Patients with fibromyalgia can also develop hypothyroidism. Exophthalmos is not seen with hypothyroidism. Hyperparathyroidism is caused by over activity of the parathyroid glands, leading to elevated serum calcium levels (hypercalcemia, increased bone absorption, hypercalciuria) and decreased serum phosphate levels."
    },
    {
        id: 172,
        stem: "After 3 weeks of teaching a patient how to ambulate with bilateral crutches and a touch-down gait, the PT determines that the most appropriate kind of feedback to give to the patient is:",
        options: {
            A: "Intermittent feedback at scheduled intervals, every other practice trial",
            B: "Continuous feedback, with ongoing verbal cuing during gait",
            C: "Immediate feedback after each practice trial",
            D: "Occasional feedback, when consistent errors appear"
        },
        correct: "D",
        correctRationale: "In learning a psychomotor skill, the patient must be able to actively process information and self-correct responses. Occasional feedback provides the best means of allowing for introspection, and is appropriate for later practice (associated and autonomous phases of motor learning).",
        incorrectRationale: "The other choices emphasize feedback more applicable to very early motor learning (cognitive phase)."
    },
    {
        id: 173,
        stem: "A patient is admitted to rehab with a 3-week history of Guillain-Barre syndrome. The therapist examines the patient for function of the glossopharyngeal/vagus nerves (CN IX/X). The BEST test for motor function of these nerves is to:",
        options: {
            A: "Ask the patient to swallow, observing the rise and fall of the larynx",
            B: "Have the patient swallow different consistencies of food",
            C: "Ask the patient to protrude the tongue and note any deviation",
            D: "Elicit the gag reflex by swiping a tongue depressor at the back of the throat."
        },
        correct: "D",
        correctRationale: "Because the glossopharyngeal and vagus nerves mediate similar functions, they are tested simultaneously. The gag reflex is correct and is tested by swiping a tongue depressor at the back of the throat.",
        incorrectRationale: "Swallowing is a complex function involving the combined actions of several cranial nerves (CN V, VII, X, XI, and XII). Tongue protrusion is a function of the hypoglossal nerve (CN XII). Rise and fall of the larynx during swallowing is a function of the cranial nerve root of the accessory nerve (XI)."
    },
    {
        id: 174,
        stem: "A patient has class III heart disease and is continually in and out of congestive heart failure (CHF). Digitalis (digoxin) has been prescribed to improve heart function. The patient will demonstrate understanding of the adverse side effects of this medication by recognizing the importance of contracting the primary physician with the appearance of which of the following symptoms?",
        options: {
            A: "Weakness and palpitations",
            B: "Tachycardia",
            C: "Involuntary movements and shaking",
            D: "Confusion and memory loss"
        },
        correct: "A",
        correctRationale: "Class III heart disease is characterized by marked limitation of physical activity; the patient is comfortable at rest, but less than ordinary physical activity causes fatigue, palpitation, dyspnea or angina pain. Digitalis (digoxin) is frequently used to treat CHF (it slows HR and increases force of myocardial contraction). Adverse reactions/side effects of digitalis can include fatigue, headache, muscle weakness, bradycardia and supraventricular or ventricular arrhythmias, including ventricular fibrillation, without premonitory signs.",
        incorrectRationale: "The other choices are not expected adverse reactions of this medication."
    },
    {
        id: 175,
        stem: "A patient suffered a severe traumatic brain injury and multiple fractures after a motor vehicle accident. The patient is recovering in the intensive care unit. The physical therapy referral requests PROM and positioning. On day 1, the patient is semialert, and drifts in and out during physical therapy. On day 2, the patient is less alert with changing status. Signs and symptoms that would require emergency consultation with a physician include:",
        options: {
            A: "Decreasing consciousness, with slowing of pulse and Cheyne-stokes respirations",
            B: "Positive Kernig's sign with developing nuchal rigidity",
            C: "Developing irritability, with increasing symptoms of photophobia, disorientation, and restlessness.",
            D: "Decreasing function of cranial nerves IV, VI, and VII"
        },
        correct: "A",
        correctRationale: "Signs of increased intracranial pressure secondary to cerebral edema and brain herniation include decreasing consciousness with slowing of pulse and Cheyne-Stokes respirations. Cranial nerve dysfunction is typically noted in CN II (papilledema) and CN III (dilation of pupils).",
        incorrectRationale: "The other choices are signs of meningeal irritation and CNS infection. All of the problems listed are serious, and can be life-threatening."
    },
    {
        id: 176,
        stem: "A patient with metabolic syndrome and multiple cardiovascular disease risk factors including hypertension, obesity and hyperglycemia is referred for physical therapy. Initial exercise prescription for this patient should include:",
        options: {
            A: "Moderate-intensity (60%-80% VO2) exercise 45 minutes per day, most days of the week",
            B: "Moderate-intensity (40%-60% VO2) exercise 30 minutes per day, 2 days per week",
            C: "Moderate-intensity (40%-60% VO2) exercise 30 minutes per day, most days of the week",
            D: "Moderate-intensity (60%-80% VO2) exercise 30 minutes per day, 2 days per week"
        },
        correct: "C",
        correctRationale: "Initial exercise training should be performed at moderate intensity, defined as 40%-60% VO2max. Duration and frequency should start at 30 minutes per day most days of the week (ACSM guidelines).",
        incorrectRationale: "High-intensity exercise (not moderate-intensity), is defined as (60-80% VO2), and is too intense for this patient, as is a 45-minute duration. A frequency of 2 days a week is too low to allow for adequate training effect."
    },
    {
        id: 177,
        stem: "A PT receives a referral from an acute care therapist to treat a patient with right hemiparesis in the home. The referral indicates that the patient demonstrates good recovery: both involved limbs are categorized as stage 4 (some movements out-of-synergy). The patient is ambulatory with a small-based quad cane. The activity that would be MOST beneficial for a patient at this stage of recovery is:",
        options: {
            A: "Supine, bending the hip and knee up to the chest with some hip abduction",
            B: "Standing, small-range knee squats",
            C: "Sitting, marching in place with alternate hip and flexion",
            D: "Standing, lifting the foot up behind and slowly lowering it"
        },
        correct: "D",
        correctRationale: "Stage 4 recovery is characterized by some movement combinations that do not follow paths of either flexion or extension obligatory synergies. Knee flexion in standing is an out-of-synergy movement.",
        incorrectRationale: "All other choices include some degree of in-synergy movements: the supine and sitting options are flexion synergy movements, and the other standing option focuses on knee and hip extension (extension synergy movements)."
    },
    {
        id: 178,
        stem: "A 62-year-old patient developed polio at the age of 6, with significant lower extremity paralysis. The patient initially wore bilateral long leg braces for a period of 2 years and then recovered enough to stop using the braces, but still required bilateral Lofstrand crutches, then a cane to ambulate. Recently, the patient has been complaining of new difficulties, and has had to start using crutches again. The PT suspects postpolio syndrome. The BEST INITIAL intervention for this patient based on current findings is to:",
        options: {
            A: "Implement an aquatic therapy program consisting of daily 1-hour aerobics",
            B: "Instruct in activity pacing and energy conservation techniques",
            C: "Initiate a lower extremity resistance training program utilizing 80% one repetition maximum",
            D: "Initiate a moderate conditioning program consisting of cycle ergometry 3 times per week for 60 minutes at 75% maximal HR"
        },
        correct: "B",
        correctRationale: "The therapist should initially teach this patient activity pacing and energy conservation techniques. It is important to balance rest with activity in order to not further weaken muscles affected by progressive postpolio muscular atrophy.",
        incorrectRationale: "Resistance training, conditioning and aquatic therapy may be helpful in improving activity tolerance if kept at low to moderate intensities (not evident in the incorrect choices). They should not be the therapist's initial priority."
    },
    {
        id: 179,
        stem: "A patient is recovering from a right cerebrovascular accident (CVA), resulting in severe left hemiplegia and visuospatial deficits. In addition, there is a large diabetic ulcer on the left foot with pitting edema. The BEST choice for wheelchair prescription for this patient is:",
        options: {
            A: "Lightweight active duty wheelchair with elevating leg rests",
            B: "Powered wheelchair with joystick and elevating leg rests",
            C: "Hemiplegic chair with elevating leg rest on the left",
            D: "One-arm drive chair with elevating leg rest on the left"
        },
        correct: "C",
        correctRationale: "A hemiplegic chair has a low seat height (17 1/2 inches as compared with the standard seat height of 19 1/2 inches) and is the best choice for this patient. The patient propels it with the sound right hand and leg. An elevating leg rest on the left is indicated for edema.",
        incorrectRationale: "A one-arm drive wheelchair has both drive mechanisms located on one wheel. The patient can propel the wheelchair by using one hand. It is contraindicated in patients with cognitive or perceptual deficits (as in this case). The electric wheelchair with joystick might also work but is significantly more expensive and less transportable and would also require increased maintenance. The seat height of a standard height wheelchair (lightweight active duty wheelchair) would be too high to allow propulsion using the sound foot and hand."
    },
    {
        id: 180,
        stem: "A patient with CHF is on digitalis to improve myocardial contraction. The patient is a new participant in a phase 2 outpatient cardiac rehabilitation program. What should the PT expect the effects of the medication to include?",
        options: {
            A: "Reduced exercise capacity",
            B: "Depressed ST segment on ECG with QT and T wave changes",
            C: "Decreased BP",
            D: "Increased resting HR"
        },
        correct: "B",
        correctRationale: "Digitalis produces characteristic changes on the ECG: gradual downward sloping of ST segment with a flat T wave and shortened QT interval. These changes can be observed during initial telemetry monitoring.",
        incorrectRationale: "HR is decreased (not increased). BP is unchanged (not decreased). Exercise capacity is increased (not reduced)."
    },
    {
        id: 181,
        stem: "A wrestler sustained an injury to the right hypoglossal nerve when he was thrown during a match and landed on his head. Several weeks later, a therapist examines the wrestler and notes significant atrophy and fasciculations on the right side of the tongue. The therapist then instructs the wrestler to stick his tongue straight out. What is the expected response consistent with an injury to the right hypoglossal nerve?",
        options: {
            A: "The wrestler is unable to protrude the tongue out of the mouth",
            B: "The tongue deviates and points to the right",
            C: "The tongue deviates and points to the left",
            D: "The tongue points straight ahead at the therapist"
        },
        correct: "B",
        correctRationale: "The injury was to the right hypoglossal nerve (CN XII), which innervates the hypoglossus, genioglossus, and styloglossus muscles and all intrinsic muscles of the tongue. Protruding or sticking the tongue out of the mouth is done primarily by contraction of the genioglossus muscle and involves a pushing movement. In the scenario above, when the individual sticks their tongue out, the stronger left side of the tongue will be unopposed and will essentially push the tongue to the right. With lower motor neuron injury, atrophy of the ipsilateral muscles of the tongue and deviation to the ipsilateral side occurs along with speech disturbance.",
        incorrectRationale: "Total paralysis and deviation to the contralateral side not possible with a unilateral peripheral nerve injury. Full and straight protrusion of the tongue is indicative of normal function."
    },
    {
        id: 182,
        stem: "A patient is recovering from stroke and demonstrates a good recovery in the lower extremity (out-of-synergy movement control). Timing deficits are apparent during walking. Isokinetic training can be used to improve:",
        options: {
            A: "Initiation of movement",
            B: "Reaction time",
            C: "Rate control at varying movement speeds",
            D: "Rate control at slow movement speeds"
        },
        correct: "C",
        correctRationale: "Patients during recovery from stroke frequently exhibit problems with rate control during walking. They are able to move at slow speeds, but as speed of movement increases, control decreases. An isokinetic device can be an effective training modality to remediate this problem.",
        incorrectRationale: "Both initiation of movement and reaction time may be impaired, but are not the likely cause of timing deficits during speed changes while walking."
    },
    {
        id: 183,
        stem: "A 6-month-old child was referred to physical therapy for right torticollis. The MOST effective method to stretch the muscle is by positioning the head and neck into:",
        options: {
            A: "Extension, right side-bending and left rotation",
            B: "Flexion, left side-bending and left rotation",
            C: "Extension, left side-bending and right rotation",
            D: "Flexion, right side-bending and left rotation"
        },
        correct: "C",
        correctRationale: "The right sternocleidomastoid produces left lateral rotation and flexion of the cervical spine. The right sternocleidomastoid is in lengthened position with the head turned to the right and the cervical spine extended.",
        incorrectRationale: "The other positions do not effectively stretch the right sternocleidomastoid muscle. Right side-bending and left rotation stretches the left sternocleidomastoid muscle."
    },
    {
        id: 184,
        stem: "The figure below demonstrates what spinal defect?",
        options: {
            A: "Ankylosing spondylitis",
            B: "Spondylosis",
            C: "Spinal stenosis",
            D: "Spondylolisthesis"
        },
        correct: "D",
        correctRationale: "The spinal defect is spondylolisthesis as demonstrated by the anterior displacement of one vertebra upon the subadjacent vertebra. The figure shows the Scotty dog pars in an oblique view.",
        incorrectRationale: "Ankylosing spondylitis (Marie Strumpell) is a progressive chronic inflammatory rheumatoid disease that primarily involves the spine and large peripheral joints. Spondylosis refers to degenerative arthritis of the vertebrae. If it affects the zygapophyseal joints, it could result in facet syndrome. There can also be pressure on nerve roots with resultant paresthesia or pain. Spinal stenosis is a narrowing of the spinal canal, intervertebral foramina or nerve root canals resulting in neurogenic claudication. None of these conditions were evident from the figure."
    },
    {
        id: 185,
        stem: "A patient complains of difficulty walking. At rest, the skin in the lower leg appears discolored. After walking for about 2 minutes, the patient complains of pain in the leg. A marked pallor is also evident in the skin over the lower third of the extremity. The PT suspects:",
        options: {
            A: "Restless leg syndrome",
            B: "Vascular claudication",
            C: "Peripheral neuropathy",
            D: "Neurogenic claudication"
        },
        correct: "B",
        correctRationale: "Intermittent claudication (leg pain) occurs with peripheral vascular disease (PVD). Exercising the extremity to the point of claudication results in the development of pain, along with increased pallor of the skin. Pulses may also be decreased or absent because of ischemia. The hallmark of claudication pain is that it is relieved with rest.",
        incorrectRationale: "The other choices are all nonvascular causes of leg pain. Neurogenic claudication is associated with burning pain and dysesthesias. Peripheral neuropathy produces aching pain with sensory loss and numbness of the feet. It can progress to involve the hands (stocking and glove distribution). Motor weakness and muscle atrophy can occur (chronic sensorimotor neuropathy) along with autonomic changes (autonomic neuropathy). Restless leg syndrome is associated with 'creeping' or 'crawling' sensations in the legs that result in involuntary movements."
    },
    {
        id: 186,
        stem: "As a PT progresses through an examination, it is becoming evident that a current patient is anterior cruciate ligament (ACL) deficient in the right knee. Which of the following tests would be UNNECESSARY for determining whether the ACL was ruptured?",
        options: {
            A: "Lachman's test",
            B: "Anterior drawer test",
            C: "Slocum's test",
            D: "Lateral pivot shift test"
        },
        correct: "B",
        correctRationale: "The anterior drawer test places the knee in 90° of flexion. In this position, the knee joint capsule is the primary constraint to movement, so performing this test may result in a false-negative determination.",
        incorrectRationale: "The other tests are all appropriate tests to assess the integrity of the ACL."
    },
    {
        id: 187,
        stem: "A PT is treating a patient with active hepatitis B infection. Transmission of the disease is best minimized if the PT:",
        options: {
            A: "Washes hands before and after treatment",
            B: "Has the patient wear gloves to prevent direct contact with the therapist",
            C: "Has the patient wear a gown and mask during treatment",
            D: "Wears gloves during any direct contact with blood or body fluids"
        },
        correct: "D",
        correctRationale: "Standard precautions specify that health care workers wear personal protective equipment (moisture-resistant gowns, masks) for protection from the splashing of blood, other body fluids or respiratory droplets resulting from direct body contact with the patient.",
        incorrectRationale: "Although hand washing is important, it is not as important as wearing gloves when the health care worker comes in direct contact with blood or body fluids. The patient with risk of transmission of known or suspected infectious agents is typically isolated in a single-patient room and wears protective equipment (masks) only when being transported out of the room. Gowns or gloves are not typically worn."
    },
    {
        id: 188,
        stem: "When conducting a bicycle ergometer test on a patient with a history of a myocardial infarction and diabetes, it is MOST important to monitor:",
        options: {
            A: "Percent of age predicted heart rate",
            B: "Rhythm on 12-lead ECG",
            C: "Exertional level on the Borg scale",
            D: "Angina level via angina scale"
        },
        correct: "B",
        correctRationale: "Patients with diabetes are prone to silent ischemia and therefore may not feel traditional angina symptoms. A 12-lead ECG will provide real-time information as to whether the patient is experiencing ischemia.",
        incorrectRationale: "Angina is not a reliable indicator of ischemia in this case. Perceived exertion and age predicted heart rate do not provide enough specific information when monitoring a patient during an ergometer test with a combination of history of MI and diabetes."
    },
    {
        id: 189,
        stem: "A patient is recovering from a complete SCI (ASIA A) with C5 tetraplegia. The PT is performing PROM exercises on the mat when the patient complains of a sudden, pounding headache and double vision. The therapist notices that the patient is sweating excessively, and determines BP at 240/95. The therapist's BEST course of action is to:",
        options: {
            A: "Lay the patient down immediately, elevate the legs and then call for a nurse",
            B: "Sit the patient up, check/empty the catheter bag and then call for emergency medical assistance",
            C: "Place the patient in a supported sitting position and continue to monitor BP before calling for help",
            D: "Lay the patient down, open the shirt and monitor respiratory rate closely"
        },
        correct: "B",
        correctRationale: "The patient is exhibiting autonomic dysreflexia (an emergency situation). The therapist should first sit the patient up and check for irritating or precipitating stimuli (e.g., a blocked catheter). The next step is to call for emergency medical assistance.",
        incorrectRationale: "Placing the patient supine can aggravate the situation. Continuing to monitor BP before calling for help causes an unnecessary delay in emergency services."
    },
    {
        id: 190,
        stem: "A PT was treating a patient in a room shared with two other patients. The patient in the next bed was uncomfortable, and asked the therapist to reposition one leg. The therapist placed the leg on two pillows, as requested by the patient. Unknown to the therapist, this patient had a femoral artery graft 2 days prior. As a result, the graft became occluded and the patient was rushed to surgery for a replacement. The patient claimed the therapist placed the leg too high on the pillows, causing the occlusion of the original graft, and sued for malpractice. The hospital administrator and legal team decided that:",
        options: {
            A: "The therapist was functioning according to common protocols of the institution and, thus, they supported the actions of the therapist.",
            B: "They would counter-sue because the patient was responsible for requesting the position change.",
            C: "The therapist was functioning outside the common protocols of the hospital and, therefore, they did not support the actions of the therapist",
            D: "It was the patient's fault for requesting the position change and, therefore, they supported the actions of the therapist."
        },
        correct: "C",
        correctRationale: "The therapist was acting outside of her area of responsibility and did something that caused the patient harm. The therapist demonstrated negligence, defined as a failure to do what a reasonably competent practitioner would have done under similar circumstances, and as a result, the patient was harmed.",
        incorrectRationale: "The therapist was not operating within standard protocols by changing the position of an unfamiliar patient, no matter how well meaning. The patient was naive about the effects of position changes, but may request a change. The therapist is not obligated to fulfill the patient's desires (especially a patient not being treated by the therapist) and, in this case, by doing so, caused harm. Consulting with a nurse, physician's assistant or other practitioner first would have been the wise course of action."
    },
    {
        id: 191,
        stem: "A patient with human immunodeficiency virus (HIV) is hospitalized with a viral infection, and has a history of four infectious episodes within the past year. The PT recognizes that ongoing systemic effects are likely to include:",
        options: {
            A: "Redness, warmth, swelling and pain",
            B: "Decreased erythrocyte sedimentation rate (ESR)",
            C: "Low-grade fever, malaise, anemia and fatigue",
            D: "Fever, tachycardia and a hypermetabolic state"
        },
        correct: "C",
        correctRationale: "Repeat infections produce a chronic inflammatory state. Systemic effects include low-grade fever, weight loss, malaise, anemia, fatigue, leukocytosis, and lymphocytosis.",
        incorrectRationale: "Inflammatory activity can be detected by an elevated ESR. Redness, warmth, swelling and pain are signs of acute inflammation. Fever, tachycardia and a hypermetabolic state are signs of the systemic effects of an acute inflammation."
    },
    {
        id: 192,
        stem: "A patient presents with limited ankle dorsiflexion range of motion both actively and passively when tested with the knee flexed. Which of the following tests would be MOST beneficial to confirm the suspected reason for the decreased range of motion?",
        options: {
            A: "Manual muscle testing of the gastrocnemius and soleus",
            B: "Manual muscle testing of the tibialis anterior",
            C: "Active and passive range of motion with the knee straight",
            D: "Joint mobility testing of the talocrural and distal tibiofibular joints"
        },
        correct: "D",
        correctRationale: "Testing the joint mobility of the talocrural and distal tibiofibular joints would be indicated if a restriction in the arthrokinematic glide of the talocrural joint was present and therefore limiting the dorsiflexion range of motion. The other possibility would be decreased flexibility in the soleus. If this was the case when a finding of normal joint mobility would indicate that decreased soleus flexibility was the culprit.",
        incorrectRationale: "Testing active and passive range of motion with the knee straight would add a potential influence from the gastrocnemius as this is a two-joint muscle crossing the ankle and the posterior aspect of the knee. Since the initial testing position with the knee flexed indicated restricted range of motion, adding the effect of the gastrocnemius would provide no additional useful information. The restricted range of motion was present both actively and passively, ruling out decreased muscle performance as a potential reason for the limitation in range of motion."
    },
    {
        id: 193,
        stem: "The use of ultrasound in the area of a joint arthroplasty is permissible, even if the surrounding area contains:",
        options: {
            A: "Metal implants",
            B: "Infected tissue",
            C: "Plastic implants",
            D: "Neoplastic lesions"
        },
        correct: "A",
        correctRationale: "Several studies have shown the safe use of US over metal implants. The acoustical energy is dispersed throughout the metal, and is absorbed into the surrounding tissue. There is no significant heating within the implant.",
        incorrectRationale: "The other choices are contraindications for the use of US."
    },
    {
        id: 194,
        stem: "The problems associated with ankylosing spondylitis in its early stages can BEST be managed by the PT with:",
        options: {
            A: "Pain management",
            B: "Joint mobilization",
            C: "Stretching of scapular stabilizers",
            D: "Postural education"
        },
        correct: "D",
        correctRationale: "Postural reeducation will help to prevent further increases in thoracic kyphosis, and costal expansion exercise will improve breathing efficiency.",
        incorrectRationale: "Stretching of scapular stabilizers is not indicated because the postural changes may already have overstretched these muscles. Pain management is usually not a factor in the early stages of the condition. Joint mobilization is not a successful intervention in this progressive disorder."
    },
    {
        id: 195,
        stem: "A patient is recovering at home from an MI and percutaneous transluminal coronary angioplasty. The PT decides to use pulse oximetry to monitor the patient's responses to exercise and activity. An acceptable oxygen saturation rate (SaO2) to maintain throughout the exercise period is:",
        options: {
            A: "85%",
            B: "82%",
            C: "92%",
            D: "75%"
        },
        correct: "C",
        correctRationale: "Normal SaO2 is 95-100%. A 92% SaO2 is lower than normal but acceptable.",
        incorrectRationale: "Unacceptable oxygen saturation rates during exercise are all other choices (85%, 82%, 75%)."
    },
    {
        id: 196,
        stem: "A client with rheumatoid arthritis presents at the physical therapy clinic with severe whiplash from a motor vehicle accident 1 week ago. Initial cervical radiograph results revealed osseous structures appeared intact. The client's chief complaints are of cervical pain and sudden falls with loss of consciousness. Examination reveals a positive Romberg sign and hyperreflexia. The PT's INITIAL action is to:",
        options: {
            A: "Immediately inform the referring physician and recommend a magnetic resonance imaging (MRI) scan",
            B: "Perform a test for transverse ligament laxity",
            C: "Fit this client with a hard cervical collar and contact the referring physician recommending a computed tomography (CT) scan",
            D: "Immediately inform the referring physician and recommend another series of radiographs."
        },
        correct: "C",
        correctRationale: "This patient is exhibiting signs and symptoms of spinal cord compression with upper motor neuron signs (hyperreflexia), a positive Romberg sign, and sudden falls with loss of consciousness. This requires immediate immobilization and contact with the physician for further imaging. Some cervical lesions (nondisplaced dens fracture, rupture of the transverse ligament) require greater imaging detail than radiographs provide. This individual also has rheumatoid arthritis, which is often accompanied by erosion of the dens and facets and ligamental laxity (transverse). Immediately informing the physician is important, and if the client is exhibiting spinal cord compression, immediate stabilization is required.",
        incorrectRationale: "Another series of radiographs is inadequate. More detailed imaging is required. An MRI is important, but would likely miss a fracture. Sometimes, MRIs can detect fractures indirectly via imaging bone marrow edema, peripheral edema or impingement of soft tissue structures. Because there are signs and symptoms of cord compression, it would be unwise to perform ligamentous laxity testing designed to exacerbate the symptoms. Provocation tests are performed only to clear the cervical spine of ligamental laxity, NOT when it is suspected. Upper cord signs require immediate stabilization and contact with the physician."
    },
    {
        id: 197,
        stem: "The optimal position for ventilation of a patient with a C5 SCI (ASIA A) is:",
        options: {
            A: "Side-lying, head of bed flat",
            B: "Semi-Fowler's",
            C: "Side-lying, head of bed elevated 45°",
            D: "Supine, head of bed flat"
        },
        correct: "D",
        correctRationale: "A patient with a C5 SCI will not have the abdominal musculature necessary to return the diaphragm to a high-domed position during exhalation. Inspiration will be affected by the change in the diaphragm's resting position. In the supine position, gravity will take the place of abdominals, holding the abdominal contents under the diaphragm, improving the zone of apposition, the height of the diaphragm dome and therefore, the ability to ventilate.",
        incorrectRationale: "The other positions listed negate the positive effects of gravity acting on the abdomen to hold the abdominal contents under the diaphragm."
    },
    {
        id: 198,
        stem: "A patient with COPD has developed respiratory acidosis. The PT instructs a PT student participating in the care to monitor the patient closely for:",
        options: {
            A: "Dizziness or lightheadedness",
            B: "Tingling or numbness of the extremities",
            C: "Hyperreflexia",
            D: "Disorientation"
        },
        correct: "D",
        correctRationale: "A patient with respiratory acidosis may present with many symptoms of increased carbon dioxide levels in the arterial blood. Significant acidosis may lead to disorientation, stupor or coma.",
        incorrectRationale: "The other choices are signs and symptoms of respiratory alkalosis or a decrease of carbon dioxide in the arterial blood."
    },
    {
        id: 199,
        stem: "A patient with a history of low back pain has been receiving physical therapy for 12 weeks. The patient is employed as a loading dockworker. He performs repetitive lifting and carrying of boxes weighing between 15 and 30 lb. An appropriate engineering control to reduce the stresses of lifting and carrying would be to:",
        options: {
            A: "Require the worker to attend a class in using correct body mechanics while performing the job",
            B: "Provide a two-wheel handcart for use in moving the boxes",
            C: "Issue the employee a back support belt",
            D: "Use job rotation"
        },
        correct: "B",
        correctRationale: "Implementation of an engineering control technique can be accomplished by designing or modifying the workstation, work methods and tools to eliminate/reduce exposure to excessive exertion, awkward postures, and repetitive motions.",
        incorrectRationale: "The other choices do not fit the definition of an engineering control technique."
    },
    {
        id: 200,
        stem: "In what position should the knee be placed when performing a valgus stress test for the medial collateral ligament?",
        options: {
            A: "Full extension",
            B: "5°-10° flexion",
            C: "70°-90° flexion",
            D: "20°-30° flexion"
        },
        correct: "D",
        correctRationale: "The medial collateral ligament is the primary restraint of valgus movement with the knee in 20°-30° flexion.",
        incorrectRationale: "In less than 20° of knee flexion, the bony congruency of the knee and the cruciate ligaments contribute significantly to resisting a valgus force. In greater than 30° of flexion, the joint capsule contributes significantly to resisting a valgus force."
    }
];

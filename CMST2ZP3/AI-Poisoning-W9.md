[CMST 2ZP3](README.md) | [Glitching tools - AI data poisoning](AI-Data-Poisioning.md)

-------------------------------------------------------------------------------

<h1 style="color: darkred;">W9: Final Research Report + AI Data Poisoning Workflow</h1>  
<p><strong>Research-Creation Project · Cyborg Storytelling using Augmented Reality</strong></p>
<p><strong>Groups of 3–4 students</strong></p>

## Objective  
Students will complete their **individual research reports** on AI data poisoning and glitch art, and **begin hands-on experimentation** with glitched AI image generation and manipulation. Each student will document this exploratory phase in a **Process Journal** that includes visuals, reflections, and technical observations.  

> **AI data poisoning** refers to the intentional insertion of misleading, corrupted, or contradictory data into machine learning systems to disrupt or subvert their output.

---

## Materials Required

- Research Notes from [W8: Conduct Individual Research](AI-Poisoning-W8.md){:target="_blank"}    
- Laptop or tablet with internet access  
- Notebook (digital or physical)  
- [Microsoft Copilot](https://copilot.cloud.microsoft/){:target="_blank"} – access with McMaster email credentials  
- [Nightshade (data poisoning tool)](https://nightshade.cs.uchicago.edu/userguide.html){:target="_blank"}  
- [Pollo.ai (Image-To-Image AI Generator)](https://pollo.ai/image-to-image-ai){:target="_blank"}  

---

## Activities  
**Complete the following in order. Ask your professor or TA for help as needed.**

---

<h3 style="color: darkred;">[30 minutes] Research Report </h3>

Individually, update and finalize your **Research Report** with the following:

### Your report should include:
- Full Name + Student Number  
- Title of your assigned theme (e.g., BIPOC Futurism)  
- Brief description of your research angle  
- 2–3 guiding research questions  
- ❗ **New:** 300–400 word **draft** analysis  
  - Engage with your academic + public sources  
  - Connect to ideas of Glitch Aesthetics and Machine Error as Art, Algorithmic Bias and the Ethics of Data Corruption, Poetics of Prompting: Language, Contradiction, and AI Interpretation and/or Speculative Media and Machine Perception
  - Have a personal voice — responses with only general ideas will lose points.  
- Annotated Bibliography:
  - 1 academic + 2 public sources  
  - APA-style citations  
  - 3–5 sentence summary of key ideas and relevance  

➡️ Export your file as a **PDF**  
📄 **Filename:** `ResearchReport-Lastname.pdf`

---

<h3 style="color: darkred;">[60 minutes] AI Data Poisoning Workflow + Process Journal </h3>

You will **individually** begin testing AI image manipulation tools and simulate data poisoning through a **creative glitching workflow**. Document each step in your **Process Journal (word document)** with screenshots, prompts, technical notes, and reflections.

---

#### **Step 1: Adversarial Prompting with Copilot**

- Access [Microsoft Copilot](https://copilot.cloud.microsoft/){:target="_blank"} using your McMaster email credentials.    
- Check the following tutorials:

<iframe width="560" height="315" src="https://www.youtube.com/embed/N_1PHumohN8?si=rlYAh_dY8H4wPzRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/6RAStep_3OI?si=vN5fRL6IsbMsq2or" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

- Generate **6–8 images** using adversarial/contradictory prompts.  
   - Use poetic, surreal, or logically impossible language.  
   - Example: `"A transparent mirror that reflects nothing but noise"`.  
- Select **2 images** that are most interesting or glitched.
- **Remix or alter** your one image. Recommended tools:
  - [Photopea](https://www.photopea.com/){:target="_blank"}
  - [Adobe Express Collage Generator](https://www.adobe.com/express/create/photo-collage){:target="_blank"}  
- In your **Process Journal**:  
   - List all prompt iterations  
   - Include screenshots of all generated images  
   - Add short notes on unexpected results or glitches
   - Add a short notes on the alterations you made to one of the images.   

---

#### **Step 2: Nightshade Data Poisoning Test**

- Install [Nightshade (data poisoning tool)](https://nightshade.cs.uchicago.edu/userguide.html){:target="_blank"}.  
- Go to *Download Links*, choose your "Computer Operating System" and download Nightshade.
- Open the software in your computer — it may take some time to launch the first time.
  > The software will automatically download the required libraries, wait until it is finished.
- Review the following tutorials:  

<iframe width="560" height="315" src="https://www.youtube.com/embed/onGm0Kf7CQA?si=E3NHiw5IM4MopVFK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

<iframe width="560" height="315" src="https://www.youtube.com/embed/Od3FRMLqwFk?si=rs6UEyrXYlPvRDu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

- Select the **two images** generated on the first step and poison them. Save both corrupted and original versions.  
- In your **Process Journal**:  
   - Include screenshots of the process  
   - Describe settings used (e.g., trigger classes, noise level, poison strength)  
   - Note any distortions, issues, or unexpected behaviours
   - Note the creative differences between the altered Co-Pilot image and the un-altered one.

---

#### **Step 3: Pollo.ai Remix**

- Go to [Pollo.ai (Image-To-Image AI Generator)](https://pollo.ai/image-to-image-ai){:target="_blank"}.  
- Review the following tutorials:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Od3FRMLqwFk?si=q166b7Hp68Y5W91Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

- Upload the two poisoned images from Nightshade.  
- For each, enter a mislabelled or contradictory prompt (e.g., corrupted face labelled `"peaceful flower garden"`).  
- Save results, then repeat the process with original (non-poisoned) images using the same prompts.  
- In your **Process Journal**:  
   - Include **side-by-side comparisons** (poisoned remix vs. non-poisoned remix)  
   - Reflect on how poisoning affected Pollo.ai’s interpretation  

---

#### **Step 4: Final Reflections**

In your **Process Journal**, answer:  
- What worked, what broke, and what surprised you?  
- What creative ideas or questions emerged from this process?  

---

### Final Output for Submission  

Organize a **single, organized document** that includes:  
- Full Name + Student Number  
- Clear section headers for each step (Steps 1–4)  
- All relevant screenshots, prompts, notes, and comparative images  
- Thoughtful responses to final reflection questions  
- Approx. 3–5 pages  

➡️ Export your file as a **PDF**  
📄 **Filename:** `ProcessJournal-Lastname.pdf`  

---

<h3 style="color: darkred;">Before the Next Class</h3>  

Review your generated and processed images. **Identify which techniques created the most interesting visual glitches and conceptual possibilities**. Bring your results to class for group discussion and planning.

---

### 📤 Submission  

| Type                    | File Name                           | Who Submits   |
|-------------------------|-------------------------------------|---------------|
| Updated Research Report | `ResearchReport-Lastname.pdf`       | Each student  |
| Process Journal         | `ProcessJournal-Lastname.pdf`       | Each student  |

> ⚠️ **Follow the submission protocols carefully. Incorrect submissions may result in lost points.**

---


[MEDIAART 2B06](../README.md)

# Final Cut

## Individual project

## Goal

Complete the final picture, sound design, colour grade, titles, credits, and professional documentation for your one-minute short film.

The finished project must be technically complete, clearly organized, ready for assessment, and suitable for the public screening.

> Attendance, participation, and active engagement during class activities are part of the project rubric.

## Project overview

- **Format:** Final one-minute, no-dialogue short film
- **Project type:** Individual
- **Primary software:** Adobe Premiere Pro
- **Optional advanced audio repair:** Adobe Audition for an individual audio file
- **Frame rate:** 24 fps
- **Picture duration:** Exactly 1 minute
- **Titles and credits:** Up to 10 additional seconds
- **Maximum final runtime:** 1 minute, 10 seconds
- **Sound:** Final ambience, production sound, Foley, SFX, and optional instrumental music
- **Colour:** Final technical correction and creative colour grading
- **Submission:** Final Cut Package as a ZIP file
- **Additional grading component:** In-person project-organization check
- **Public presentation:** Final screening

## Required deliverables

| Item | Required filename |
|---|---|
| Final Cut Package | `Lastname_Firstname_FinalPackage.zip` |
| Final Cut Export | `Lastname_Firstname_FinalCut.mp4` |
| Final Information Sheet | `Lastname_Firstname_InfoSheet.pdf` |
| Representative Still 1 | `Lastname_Firstname_Still_01.png` |
| Representative Still 2 | `Lastname_Firstname_Still_02.png` |
| Representative Still 3 | `Lastname_Firstname_Still_03.png` |

Two representative stills are required. A third still may be included when it adds useful visual variety.

## Project stages

Complete the following stages in order:

<!--
/////////////////
SECTION 1
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">1. Confirm picture lock</span>
    <span class="section-description">
      Finalize the shot order, timing, transitions, aspect ratio, and one-minute picture duration before completing sound and colour.
    </span>
  </summary>

<div class="section-content" markdown="1">

Picture lock means that the visual structure is final.

After picture lock, do not:

- Add or remove shots
- Reorder shots
- Change shot duration
- Change the sequence duration
- Change the aspect ratio
- Make major transition changes

The final sound design and colour grade must adapt to the locked sequence.

## Review the latest sequence

Watch the complete film from beginning to end.

Check:

- Story clarity
- Shot order
- Pacing and rhythm
- Continuity
- Repetition
- Shot necessity
- Transitions
- Aspect ratio
- Beginning and ending
- Total picture duration

## Make the final picture adjustments

You may:

- Trim or extend a shot by a small amount
- Remove a redundant shot
- Replace an unusable shot
- Correct a continuity problem
- Refine an intentional transition
- Correct framing or scaling
- Re-record a necessary shot when no usable version exists

Use straight cuts in most situations. Keep transitions minimal and connected to a clear narrative or temporal purpose.

## Confirm the one-minute picture duration

The film itself must be:

```text
00:01:00
```

Opening and closing titles may extend the final runtime by no more than 10 seconds.

## Export the picture-lock review

Export:

```text
ProjectName_PictureLock.mp4
```

Save it inside:

```text
03_Renders
```

Watch the exported file from beginning to end before moving to the sound-design stage.

<fieldset class="equipment-checklist">
  <legend>Picture-lock check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Review the complete sequence.</strong>
      Check clarity, pacing, continuity, transitions, and shot necessity.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the final shot order.</strong>
      Do not begin the final sound design while the picture is still changing.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the picture duration.</strong>
      Keep the film itself exactly one minute long.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Export the picture-lock review.</strong>
      Save <code>ProjectName_PictureLock.mp4</code> inside <code>03_Renders</code>.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Lock the visual sequence.</strong>
      Do not change shot order or duration after this point.
    </span>
  </label>
</fieldset>

</div>
</details>

<!--
/////////////////
SECTION 2
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">2. Build the final sound design in Premiere Pro</span>
    <span class="section-description">
      Synchronize, organize, layer, edit, and balance ambience, production sound, Foley, SFX, and optional music.
    </span>
  </summary>

<div class="section-content" markdown="1">

Complete the final sound design and mix in **Adobe Premiere Pro**.

Review:

- [W10 — Sound Design Production Framework](../TechWalks/TW-W10.md){:target="_blank"}
- [W10 — Sound Design Production Tutorials](../Tutorials/index.html?file=T-W10.json){:target="_blank"}
- [W12 — Sound Design and Final Post-Production Tutorials](../Tutorials/index.html?file=T-W12.json){:target="_blank"}

## Duplicate the picture-lock sequence

Duplicate the locked sequence and rename the copy:

```text
ProjectName_FinalMix
```

Do not alter the visual timing in this sequence.

## Import and organize the sound library

Import the prepared files from `02_Audio`.

Organize the Project panel using bins such as:

```text
ProdAudio
Ambience
Foley
SFX
Music
```

Use separate timeline tracks for different sound functions.

Suggested track structure:

| Track | Sound material |
|---|---|
| **A1–A2** | Primary production sound |
| **A3–A4** | Ambience and room tone |
| **A5–A6** | Foley |
| **A7–A8** | Sound effects |
| **A9–A10** | Instrumental music |

The exact number of tracks may change according to the project.

## Build the ambience foundation

Use room tone and ambience to establish the location and maintain continuity.

Check that:

- Every location has an acoustic identity.
- Background sound continues naturally across cuts.
- Interior and exterior spaces sound different when appropriate.
- Ambience does not disappear unexpectedly.
- Environmental changes support the visual transitions.

Use short fades or **Constant Power** transitions when separate ambience clips meet.

## Synchronize production sound and Foley

Align sounds with visible actions.

Use:

- Waveforms
- Synchronization claps
- Visible impacts
- Footsteps
- Doors
- Object contact
- Clothing movement
- Other clear action points

Check synchronization frame by frame when necessary.

## Add sound effects

Use SFX to reinforce or extend specific moments.

Sound effects should:

- Match the action
- Fit the scale and material of the visible object
- Support the environment
- Remain consistent with the film’s visual style
- Avoid sounding exaggerated unless exaggeration is intentional

## Add optional instrumental music

Music is optional.

When using music:

- Use instrumental music only.
- Confirm that it is appropriately licensed.
- Keep the film understandable without relying on music.
- Do not allow music to mask important ambience, Foley, or SFX.
- Use fades or keyframes to shape its entrance and exit.
- Credit the creator and licence in the Final Information Sheet.

## Balance the mix

Use:

- Clip Gain
- Volume keyframes
- Track volume
- Essential Sound
- Panning
- Parametric Equalizer
- DeNoise
- Compression
- Limiting
- Audio meters

Apply corrective processing only where it is needed.

Check that:

- No track clips.
- No sound layer consistently overpowers the others.
- Quiet details remain audible.
- Loud sounds retain impact without distortion.
- Music remains a supporting layer.
- The mix works through headphones and computer speakers.
- The master output remains below clipping.

## Optional advanced workflow: repair one file in Audition

Use Adobe Audition only when one individual audio file requires advanced repair.

Possible uses include:

- Removing an isolated click
- Repairing a damaged section
- Reducing consistent background noise
- Editing a waveform with greater precision

1. Select the audio clip in the Premiere Pro timeline.
2. Right-click the clip.
3. Select **Edit Clip in Adobe Audition**.
4. Complete the repair.
5. Save the file.
6. Return to Premiere Pro.
7. Confirm that the linked audio updated correctly.

Do not transfer the complete sequence to Audition.

## Export the audio-check review

Export:

```text
ProjectName_AudioCheck.mp4
```

Save it inside:

```text
03_Renders
```

Review the export using headphones.

Listen for:

- Missing sound layers
- Synchronization problems
- Abrupt starts or stops
- Clipping
- Excessive noise
- Inconsistent ambience
- Music overpowering the scene
- Sound that does not match the visible action

<fieldset class="equipment-checklist">
  <legend>Final sound-design check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Duplicate the locked sequence.</strong>
      Preserve the picture-lock version before beginning the final mix.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Organize the sound tracks.</strong>
      Separate production sound, ambience, Foley, SFX, and music.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Build continuous ambience.</strong>
      Maintain the acoustic identity of every location.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Synchronize action sounds.</strong>
      Match production sound, Foley, and SFX to the visible movement.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Balance the complete mix.</strong>
      Keep all layers clear, controlled, and below clipping.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Use Audition only when necessary.</strong>
      Send only an individual file that requires advanced repair.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Export the audio-check review.</strong>
      Save <code>ProjectName_AudioCheck.mp4</code> inside <code>03_Renders</code>.
    </span>
  </label>
</fieldset>

</div>
</details>

<!--
/////////////////
SECTION 3
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">3. Complete the final colour grade</span>
    <span class="section-description">
      Confirm technical consistency, then shape a controlled visual palette that supports the film’s tone.
    </span>
  </summary>

<div class="section-content" markdown="1">

Review:

- [W12 — Final Cut Framework](../TechWalks/TW-W12.md){:target="_blank"}
- [W12 — Colour in Film and Colour Grading Tutorials](../Tutorials/index.html?file=T-W12.json){:target="_blank"}

Colour correction and colour grading are different stages.

- **Colour correction** creates technical consistency.
- **Colour grading** shapes the final visual tone and mood.

## Confirm the base corrections

Before grading, check:

- Exposure
- White balance
- Tint
- Highlight detail
- Shadow detail
- Contrast
- Saturation
- Consistency between connected shots

Use Lumetri Scopes and direct shot comparison.

Do not grade around unresolved technical problems.

## Apply the creative grade

Use the Lumetri Color panel to refine:

- Curves
- Highlights
- Shadows
- Midtones
- Contrast
- Saturation
- Colour balance
- Colour Wheels
- Vignette, when appropriate and subtle

Creative choices must remain consistent with the film.

Avoid:

- Extreme colour casts
- Crushed shadows that remove necessary detail
- Clipped highlights
- Excessive saturation
- Heavy LUTs
- A different visual style on every shot
- Grading that hides focus or exposure problems

## Review the sequence as a whole

Watch the film without stopping.

Check that:

- Connected shots belong to the same visual world.
- Skin, objects, and neutral areas remain believable when relevant.
- The visual treatment supports the emotional trajectory.
- The grade does not distract from the story.
- Titles remain readable against the graded image.

## Export the colour-check review

Export:

```text
ProjectName_ColourCheck.mp4
```

Save it inside:

```text
03_Renders
```

Review the exported file on a second screen when possible.

<fieldset class="equipment-checklist">
  <legend>Final colour-grade check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the technical corrections.</strong>
      Resolve exposure, white-balance, and contrast inconsistencies before grading.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Apply a controlled visual treatment.</strong>
      Use subtle, consistent choices that support the film.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Review connected shots.</strong>
      Check visual continuity throughout the complete sequence.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Export the colour-check review.</strong>
      Save <code>ProjectName_ColourCheck.mp4</code> inside <code>03_Renders</code>.
    </span>
  </label>
</fieldset>

</div>
</details>

<!--
/////////////////
SECTION 4
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">4. Add final titles and credits</span>
    <span class="section-description">
      Create clear opening and closing text that identifies the work and accurately credits every contributor and sourced element.
    </span>
  </summary>

<div class="section-content" markdown="1">

Add the opening and closing titles after the picture, sound, and colour are stable.

## Required title information

Include:

- Film title
- Author or director name
- Year
- Relevant production credits
- Performer names
- Collaborator names
- Original and sourced audio credits
- Location support when relevant

Do not include the course name in the film titles.

## Design requirements

Titles must be:

- Clear
- Readable
- Simple
- Consistent with the visual design
- Visible long enough to read
- Positioned inside the safe area
- Legible against the background

Avoid:

- Excessive animation
- Decorative effects that distract from the film
- Too many fonts
- Very small text
- Low contrast
- Long credit sequences that exceed the runtime limit

## Runtime limit

The film must remain exactly one minute without titles.

Titles and credits may add:

```text
00:00:10 maximum
```

The complete final export must not exceed:

```text
00:01:10
```

<fieldset class="equipment-checklist">
  <legend>Titles and credits check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Include the film title and author.</strong>
      Identify the work clearly.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Credit all contributors.</strong>
      Use accurate names and roles.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Credit sourced audio.</strong>
      Include the creator, title, source, and licence when required.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check readability.</strong>
      Confirm contrast, size, duration, alignment, and safe-area placement.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the total runtime.</strong>
      Keep the final export at or below 1 minute, 10 seconds.
    </span>
  </label>
</fieldset>

</div>
</details>

<!--
/////////////////
SECTION 5
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">5. Export and review the final cut</span>
    <span class="section-description">
      Export the completed film, inspect the actual MP4, and correct any image, sound, title, or compression problems.
    </span>
  </summary>

<div class="section-content" markdown="1">

## Export settings

Export from Adobe Premiere Pro using:

- **Filename:** `Lastname_Firstname_FinalCut.mp4`
- **Format:** H.264
- **Preset:** Match Source — Adaptive High Bitrate
- **Frame rate:** 24 fps
- **Resolution:** Match the sequence
- **Aspect ratio:** Match the sequence
- **Audio codec:** AAC
- **Range:** Entire Source
- **Audio:** Enabled
- **Effects:** Enable only the effects intentionally used in the final sequence

Save the final export inside:

```text
04_Exports
```

## Review the exported MP4

Do not assess the project only inside the Premiere Pro timeline.

Open:

```text
Lastname_Firstname_FinalCut.mp4
```

Watch the complete export from beginning to end.

Check:

### Picture

- No black frames
- No missing media
- Correct aspect ratio
- Correct framing and crop
- Consistent colour
- No unexpected effects
- Correct beginning and ending

### Sound

- All required layers are present
- No clipping or distortion
- No unexplained silence
- No abrupt sound cuts
- Correct synchronization
- Balanced music, ambience, Foley, and SFX

### Titles and credits

- Correct spelling
- Correct names
- Correct roles
- Complete sound credits
- Readable text
- Correct duration

Re-export the file when any problem is found.

<figure class="media-card">
  <img
    src="imgs/15.png"
    alt="Adobe Premiere Pro export settings for an H.264 final video"
  >
  <figcaption>
    Match the final export settings to the locked sequence and review the exported MP4 before submission.
  </figcaption>
</figure>

<fieldset class="equipment-checklist">
  <legend>Final-export check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Export the final MP4.</strong>
      Save <code>Lastname_Firstname_FinalCut.mp4</code> inside <code>04_Exports</code>.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Watch the exported file.</strong>
      Review the actual MP4 rather than relying only on the timeline.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check the final sound mix.</strong>
      Use headphones and confirm that every layer is present and controlled.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check titles and credits.</strong>
      Correct spelling, roles, licences, readability, and duration.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Re-export when necessary.</strong>
      Replace the previous file with the corrected final version.
    </span>
  </label>
</fieldset>

</div>
</details>

<!--
/////////////////
SECTION 6
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">6. Create the Final Information Sheet and representative stills</span>
    <span class="section-description">
      Prepare professional documentation that introduces the film, identifies its creators, and supports screening and portfolio use.
    </span>
  </summary>

<div class="section-content" markdown="1">

Review [W12 — Final Cut and Portfolio Framework](../TechWalks/TW-W12.md){:target="_blank"}.

## Export representative stills

Select two or three strong frames from the final sequence.

Choose images that:

- Represent the film’s visual style
- Show the main subject, action, or environment
- Have strong composition
- Have correct focus and exposure
- Offer visual variety
- Do not contain transitional blur unless intentional
- Do not include interface elements or editing controls

Export each still as PNG.

Required filenames:

```text
Lastname_Firstname_Still_01.png
Lastname_Firstname_Still_02.png
Lastname_Firstname_Still_03.png
```

Two stills are required. The third is optional.

## Create the Final Information Sheet

Create a one- or two-page PDF.

Include:

### Representative image

- One final still
- Large enough to communicate the visual character of the film
- Integrated into a clear and balanced layout

### Film information

- Title
- Director
- Country
- Year of completion
- Runtime
- Aspect ratio

### Logline

Write one or two concise sentences describing the central action, situation, or tension.

### Short synopsis

Write 100–150 words.

The synopsis should communicate:

- Character or subject
- Situation
- Development
- Shift or outcome

Do not explain every action or remove all ambiguity.

### Credits

Include all relevant roles:

- Director
- Editor
- Cinematography
- Performer
- Sound design
- Foley
- Music
- SFX
- Additional collaborators
- Location support

For sourced audio, include the title, creator, website, and licence.

## Design requirements

Use:

- Clear hierarchy
- Consistent typography
- Careful alignment
- Appropriate margins
- White space
- Balanced image and text placement
- Accurate spelling and punctuation

Export the document as:

```text
Lastname_Firstname_InfoSheet.pdf
```

Save it inside:

```text
00_ProjectFiles
```

<fieldset class="equipment-checklist">
  <legend>Documentation check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Export at least two representative PNG stills.</strong>
      Use the required filenames and select visually strong frames.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Include complete film information.</strong>
      Identify the title, director, country, year, runtime, and aspect ratio.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Revise the logline and synopsis.</strong>
      Keep the writing concise, specific, and connected to the final film.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Complete the credits.</strong>
      Include every contributor and sourced audio element.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Export the Final Information Sheet.</strong>
      Save <code>Lastname_Firstname_InfoSheet.pdf</code> inside <code>00_ProjectFiles</code>.
    </span>
  </label>
</fieldset>

</div>
</details>

<!--
/////////////////
SECTION 7
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">7. Build, verify, and submit the Final Cut Package</span>
    <span class="section-description">
      Assemble the final deliverables, complete the in-person grading check, verify the ZIP file, and submit the screening-ready package.
    </span>
  </summary>

<div class="section-content" markdown="1">

## Organize the project folder

Before the in-person grading check, confirm the following:

### `00_ProjectFiles`

- `ProjectName.prproj`
- Premiere Pro autosaves
- `Lastname_Firstname_InfoSheet.pdf`

An Audition `.sesx` file is not required.

### `03_Renders`

- `ProjectName_PictureLock.mp4`
- `ProjectName_AudioCheck.mp4`
- `ProjectName_ColourCheck.mp4`

### `04_Exports`

- `Lastname_Firstname_FinalCut.mp4`

Also be prepared to show:

- Organized raw footage
- Organized audio
- Working media links
- Final sequences
- Titles and credits
- The representative stills
- An up-to-date backup

## Create the Final Cut Package

Create:

```text
Lastname_Firstname_FinalPackage
```

Place inside:

```text
Lastname_Firstname_FinalPackage
├── Lastname_Firstname_FinalCut.mp4
├── Lastname_Firstname_InfoSheet.pdf
├── Lastname_Firstname_Still_01.png
├── Lastname_Firstname_Still_02.png
└── Lastname_Firstname_Still_03.png
```

The third still is optional.

## Compress the package

Compress the complete main folder as:

```text
Lastname_Firstname_FinalPackage.zip
```

Do not compress the individual files separately.

## Verify the ZIP file

Before submission:

1. Open the ZIP.
2. Confirm that the main folder is present.
3. Open the final MP4.
4. Open the Information Sheet.
5. Open every still.
6. Confirm all filenames.
7. Confirm that the final MP4 is the corrected version.
8. Confirm that the runtime does not exceed 1 minute, 10 seconds.
9. Confirm that the package can be downloaded and opened from another device.

## Submission

| Item | Required filename |
|---|---|
| Final Cut Package | `Lastname_Firstname_FinalPackage.zip` |
| Project organization | Reviewed in person |

Submit the ZIP file through Avenue to Learn.

The final project must be correctly submitted and technically usable to be included in the public screening.

Incorrect filenames, missing deliverables, inaccessible files, broken media, or an incomplete package may prevent the work from being screened and may affect the grade.

<fieldset class="equipment-checklist">
  <legend>Final submission and screening check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Prepare the complete project folder.</strong>
      Confirm the Premiere Pro project, autosaves, renders, export, audio, stills, and documentation.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Complete the in-person grading check.</strong>
      Present the organized project before the end of class.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Build the Final Cut Package.</strong>
      Include the MP4, PDF, and required PNG stills.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Name the ZIP correctly.</strong>
      Use <code>Lastname_Firstname_FinalPackage.zip</code>.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Open and verify every deliverable.</strong>
      Confirm that the final film, Information Sheet, and stills remain accessible.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Submit through Avenue to Learn.</strong>
      Verify that the correct screening-ready ZIP file was uploaded.
    </span>
  </label>
</fieldset>

</div>
</details>

---

Credits: Jessica A. Rodríguez

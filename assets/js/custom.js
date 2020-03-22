//Navbar Loader
$(function() {
  $("#navbar").load("navbar.html");
 });
 
 
 function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
 }
 
 function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
 }
 
 
 function count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
   if (str.charAt(position) == letter) {
    letter_Count++;
   }
  }
  return letter_Count;
 }
 
 //Function to count the base group in a Nucleic Acid
 function nucleotideCount() {
 
 
  let dna_sequence = document.getElementById('dna').value;

  if(dna_sequence == ""){
    alert("Please enter a DNA Sequence")
    return
  }
  let a = count(dna_sequence, "A")
  let c = count(dna_sequence, "C")
  let g = count(dna_sequence, "G")
  let t = count(dna_sequence, "T")
 
  document.querySelector("#nc-count").innerHTML = " A: " + `${a}` +
   " C: " + `${c}` +
   " G: " + `${g}` +
   " T: " + `${t}`;
 }
 
 //finding the GC and AT Content of a DNA
 function findGC_ATcontent() {
  let dna_sequence = document.getElementById('dna').value;
  if(dna_sequence == ""){
    alert("Please enter a DNA Sequence")
    return
  }
  let a = count(dna_sequence, "A")
  let c = count(dna_sequence, "C")
  let g = count(dna_sequence, "G")
  let t = count(dna_sequence, "T")
 
  let gc_content = ((g + c) / (g + c + a + t) * 100).toFixed(2) + "%";
  let at_content = ((a + t) / (g + c + a + t) * 100).toFixed(2) + "%";
  if (dna_sequence == "") {
   document.getElementById('dna').style.border = "1px solid red";
   document.getElementById('gc_ac-content').innerHTML = "";
  } else {
   document.getElementById('gc_at-content').innerHTML = "GC Content: " + gc_content + `<br>` +
    "AT Content: " + at_content;
  }
 }
 
 //Calculating Hamming Distance
 function calcHD() {
  let dna1 = document.getElementById('dna1').value
  let dna2 = document.getElementById('dna2').value
  if(dna1 == "" && dna2!=""){
    alert("Please enter a DNA1")
    return
  }
  else if(dna2=="" && dna1!="")
  {
    alert("Please enter a DNA2")
    return
  }
  else if(dna2=="" && dna1==""){
    alert("Both DNA Sequences cannot be blank")
    return
  }
  let count = 0,
   i = 0
  if (dna1.length != dna2.length)
   alert("DNA Sequences are not of equal length")
 
  while (i < dna1.length) {
   if (dna1[i] != dna2[i])
    count++
   i++
  }
 
  document.getElementById("hamming-distance").innerHTML = "Hamming Distance: " + count
 }
 
 //Converting DNA to RNA
 function dnaToRna() {
  let dna_sequence = document.getElementById('dna').value;
  if(dna_sequence == ""){
    alert("Please enter a DNA Sequence")
    return
  }
  let rna = "";
  for (let i = 0; i < dna_sequence.length; i++) {
   if (dna_sequence[i] === 'T')
    rna += dna_sequence[i].replace('T', 'U')
   else
    rna += dna_sequence[i]
  }
  document.getElementById('dna-to-rna').innerHTML = "RNA Sequence: " + rna;
 }
 
 //Complementing the DNA
 function dnaComplement() {
  let dna_sequence = document.getElementById('dna').value;
  if(dna_sequence == ""){
    alert("Please enter a DNA Sequence")
    return
  }
  let dna_complement = "";
 
  for (let i = 0; i < dna_sequence.length; i++) {
   if (dna_sequence[i] === 'T')
    dna_complement += dna_sequence[i].replace('T', 'A')
   else if (dna_sequence[i] === 'A')
    dna_complement += dna_sequence[i].replace('A', 'T')
   else if (dna_sequence[i] === 'G')
    dna_complement += dna_sequence[i].replace('G', 'C')
   else if (dna_sequence[i] === 'C')
    dna_complement += dna_sequence[i].replace('C', 'G')
 
  }
  document.getElementById('dna-complement').innerHTML = "DNA Complement: <br>" + dna_complement;
 }
 
 function dnaSequenceValid() {
  document.getElementById('dna').style.border = "0px";
 }
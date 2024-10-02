'use client'

import { clsx } from 'clsx'
// import { motion } from 'framer-motion'

export function Logo({ className }: { className?: string }) {
  // let transition = {
  //   duration: 0.5,
  //   ease: 'easeInOut',
  // }

  return (
		<svg width="179px" height="56px" viewBox="0 0 179 56" className={className}>

				<defs>
						<linearGradient x1="21.3864315%" y1="19.5317865%" x2="124.428467%" y2="124.08241%" id="linearGradient-1">
								<stop stop-color="#008D36" offset="0%"></stop>
								<stop stop-color="#95C11F" offset="100%"></stop>
						</linearGradient>
						<linearGradient x1="21.3864315%" y1="48.1759702%" x2="124.428467%" y2="54.4350655%" id="linearGradient-2">
								<stop stop-color="#008D36" offset="0%"></stop>
								<stop stop-color="#95C11F" offset="100%"></stop>
						</linearGradient>
						<linearGradient x1="29.6693459%" y1="18.6936926%" x2="102.883282%" y2="126.120206%" id="linearGradient-3">
								<stop stop-color="#008D36" offset="0%"></stop>
								<stop stop-color="#95C11F" offset="100%"></stop>
						</linearGradient>
						<linearGradient x1="47.5983847%" y1="18.6936926%" x2="56.2469853%" y2="126.120206%" id="linearGradient-4">
								<stop stop-color="#008D36" offset="0%"></stop>
								<stop stop-color="#95C11F" offset="100%"></stop>
						</linearGradient>
						<linearGradient x1="9.2103564%" y1="60.5216734%" x2="91.0382231%" y2="60.5216734%" id="linearGradient-5">
								<stop stop-color="#95C11F" offset="0%"></stop>
								<stop stop-color="#008D36" offset="100%"></stop>
						</linearGradient>
						<path d="M63.60876,56 L63.26076,44.11 L64.94276,47.851 L69.37976,56 L75.64376,56 L75.64376,36.28 L69.72776,36.28 L70.07576,48.17 L68.36476,44.371 L63.95676,36.28 L57.69276,36.28 L57.69276,56 L63.60876,56 Z M86.468445,56.551 C90.528445,56.551 93.631445,54.405 94.414445,50.809 L88.527445,50.809 C88.121445,51.766 87.512445,52.172 86.468445,52.172 C85.076445,52.172 84.264445,51.186 84.003445,49.33 L94.298445,49.33 L94.298445,48.112 C94.298445,42.892 91.195445,39.702 86.294445,39.702 C81.451445,39.702 78.232445,42.776 78.232445,48.141 C78.232445,53.303 81.422445,56.551 86.468445,56.551 Z M88.498445,46.372 L84.090445,46.372 C84.409445,44.864 85.134445,44.081 86.294445,44.081 C87.454445,44.081 88.179445,44.864 88.498445,46.372 Z M102.77413,56.551 C104.25313,56.551 105.44213,56.29 106.08013,56 L106.08013,51.737 L105.03613,51.737 C103.32513,51.737 103.00613,50.925 103.00613,49.62 L103.00613,44.487 L106.08013,44.487 L106.08013,40.253 L103.00613,40.253 L103.00613,36.599 L97.38013,36.599 L97.38013,40.253 L95.64013,40.253 L95.64013,44.487 L97.38013,44.487 L97.38013,50.519 C97.38013,54.376 99.14913,56.551 102.77413,56.551 Z M130.0495,56 L130.0495,51.215 L120.8855,51.215 L130.0495,41.065 L130.0495,36.28 L114.1575,36.28 L114.1575,41.065 L123.3215,41.065 L114.1575,51.215 L114.1575,56 L130.0495,56 Z M140.149185,56.551 C144.209185,56.551 147.312185,54.405 148.095185,50.809 L142.208185,50.809 C141.802185,51.766 141.193185,52.172 140.149185,52.172 C138.757185,52.172 137.945185,51.186 137.684185,49.33 L147.979185,49.33 L147.979185,48.112 C147.979185,42.892 144.876185,39.702 139.975185,39.702 C135.132185,39.702 131.913185,42.776 131.913185,48.141 C131.913185,53.303 135.103185,56.551 140.149185,56.551 Z M142.179185,46.372 L137.771185,46.372 C138.090185,44.864 138.815185,44.081 139.975185,44.081 C141.135185,44.081 141.860185,44.864 142.179185,46.372 Z M155.96187,56 L155.96187,48.286 C155.96187,46.024 157.09287,44.777 159.49987,44.777 C160.25387,44.777 160.77587,44.835 161.35587,44.951 L161.35587,40.253 C161.03687,39.876 160.42787,39.702 159.76087,39.702 C158.33987,39.702 156.91887,40.485 155.96187,42.312 L155.96187,40.253 L150.33587,40.253 L150.33587,56 L155.96187,56 Z M170.556555,56.551 C175.399555,56.551 178.618555,53.448 178.618555,48.141 C178.618555,42.95 175.486555,39.702 170.556555,39.702 C165.713555,39.702 162.494555,42.776 162.494555,48.141 C162.494555,53.303 165.626555,56.551 170.556555,56.551 Z M170.556555,52.056 C169.048555,52.056 168.265555,50.693 168.265555,48.141 C168.265555,45.56 169.048555,44.197 170.556555,44.197 C172.064555,44.197 172.847555,45.56 172.847555,48.141 C172.847555,50.693 172.064555,52.056 170.556555,52.056 Z" id="path-6"></path>
						<path d="M66.643,30.464 C70.848,30.464 74.357,28.173 75.372,23.823 L70.442,23.823 C69.891,25.679 68.441,26.665 66.585,26.665 C63.569,26.665 61.887,24.258 61.887,20.169 C61.887,16.109 63.598,13.615 66.585,13.615 C68.557,13.615 69.949,14.659 70.5,16.602 L75.372,16.602 C74.531,12.107 70.935,9.816 66.701,9.816 C60.756,9.816 57.131,13.789 57.131,20.169 C57.131,26.549 60.756,30.464 66.643,30.464 Z M85.268685,30.464 C89.908685,30.464 92.953685,27.477 92.953685,22.199 C92.953685,17.095 89.995685,13.905 85.268685,13.905 C80.628685,13.905 77.612685,16.892 77.612685,22.199 C77.612685,27.332 80.541685,30.464 85.268685,30.464 Z M85.268685,26.868 C83.267685,26.868 82.165685,25.215 82.165685,22.199 C82.165685,19.154 83.238685,17.501 85.268685,17.501 C87.298685,17.501 88.400685,19.183 88.400685,22.199 C88.400685,25.244 87.327685,26.868 85.268685,26.868 Z M100.29837,30 L100.29837,21.039 C100.29837,19.038 101.42937,17.501 103.19837,17.501 C104.82237,17.501 105.60537,18.516 105.60537,20.488 L105.60537,30 L110.04237,30 L110.04237,19.589 C110.04237,15.732 107.80937,13.905 104.82237,13.905 C102.90837,13.905 101.31337,14.717 100.29837,16.457 L100.29837,14.398 L95.86137,14.398 L95.86137,30 L100.29837,30 Z M120.229055,30.464 C124.289055,30.464 127.131055,28.347 127.131055,25.273 C127.131055,19.096 117.474055,21.793 117.474055,18.719 C117.474055,17.878 118.228055,17.298 119.388055,17.298 C120.954055,17.298 121.882055,17.965 122.143055,19.56 L126.551055,19.56 C126.116055,15.616 123.274055,13.905 119.533055,13.905 C115.357055,13.905 113.240055,16.341 113.240055,18.951 C113.240055,25.215 122.694055,22.518 122.694055,25.534 C122.694055,26.491 121.911055,27.1 120.345055,27.1 C118.692055,27.1 117.503055,26.317 117.300055,24.867 L112.863055,24.867 C113.443055,28.724 116.285055,30.464 120.229055,30.464 Z M135.05574,30.464 C136.94074,30.464 138.47774,29.652 139.49274,27.912 L139.49274,30 L143.92974,30 L143.92974,14.398 L139.49274,14.398 L139.49274,23.359 C139.49274,25.36 138.39074,26.868 136.67974,26.868 C135.11374,26.868 134.35974,25.882 134.35974,23.881 L134.35974,14.398 L129.92274,14.398 L129.92274,24.78 C129.92274,28.666 132.09774,30.464 135.05574,30.464 Z M151.941425,30 L151.941425,9.12 L147.504425,9.12 L147.504425,30 L151.941425,30 Z M160.99711,30.464 C162.18611,30.464 163.17211,30.29 163.66511,30.058 L163.66511,26.723 L162.82411,26.723 C160.91011,26.723 160.50411,25.882 160.50411,24.374 L160.50411,17.762 L163.69411,17.762 L163.69411,14.398 L160.50411,14.398 L160.50411,10.773 L156.06711,10.773 L156.06711,14.398 L154.15311,14.398 L154.15311,17.762 L156.06711,17.762 L156.06711,24.925 C156.06711,28.55 157.66211,30.464 160.99711,30.464 Z" id="path-7"></path>
				</defs>
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="logoColour" transform="translate(0.000000, -1.000000)">
								<path d="M5.45405845,5.00431099 L32.564311,32.114311 L37.681,27 L37.681,41.679 L23,41.68 L27.614311,37.064311 L0.504310986,9.95405845 L5.45405845,5.00431099 Z" id="Combined-Shape" fill="url(#linearGradient-1)"></path>
								<rect id="Rectangle" fill="url(#linearGradient-2)" x="23" y="49" width="29" height="7"></rect>
								<path d="M28.5459415,1.00431099 L33.495689,5.95405845 L33.4493398,5.99931099 L52.495689,25.0459415 L51.5413398,25.999311 L52,26 L52,42 L45,42 L44.9993398,27.449311 L28.4993398,10.949311 L22.8890873,16.5606602 L17.9393398,11.6109127 L23.5503398,6.00031099 L23.504311,5.95405845 L28.4540585,1.00431099 L28.4993398,1.05031099 L28.5459415,1.00431099 Z" id="Combined-Shape" fill="url(#linearGradient-3)"></path>
								<path d="M10.1611652,19.3890873 L15.1109127,24.3388348 L11.999311,27.4490873 L12,56 L5,56 L5,26 L5.45831099,25.9990873 L4.50431099,25.0459415 L10.1611652,19.3890873 Z" id="Combined-Shape" fill="url(#linearGradient-4)"></path>
								<g id="NetZero" fillRule="nonzero">
										<use fill="#000000" href="#path-6"></use>
										<use fill="url(#linearGradient-5)" href="#path-6"></use>
								</g>
								<g id="Consult" fillRule="nonzero">
										<use fill="#1F0101" href="#path-7"></use>
										<use fill="#000000" href="#path-7"></use>
								</g>
						</g>
				</g>
		</svg>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
		<svg width="52px" height="55px" viewBox="0 0 52 55" className={className}>
			
				<defs>
						<linearGradient x1="21.3864315%" y1="18.6936926%" x2="124.428467%" y2="126.120206%" id="linearGradient-1">
								<stop stop-color="#008D36" offset="0%"></stop>
								<stop stop-color="#95C11F" offset="100%"></stop>
						</linearGradient>
						<linearGradient x1="21.3864315%" y1="48.1759702%" x2="124.428467%" y2="54.4350655%" id="linearGradient-2">
								<stop stop-color="#008D36" offset="0%"></stop>
								<stop stop-color="#95C11F" offset="100%"></stop>
						</linearGradient>
						<linearGradient x1="29.1483513%" y1="18.6936926%" x2="104.238473%" y2="126.120206%" id="linearGradient-3">
								<stop stop-color="#008D36" offset="0%"></stop>
								<stop stop-color="#95C11F" offset="100%"></stop>
						</linearGradient>
						<linearGradient x1="47.4709702%" y1="18.6936926%" x2="56.5784109%" y2="126.120206%" id="linearGradient-4">
								<stop stop-color="#008D36" offset="0%"></stop>
								<stop stop-color="#95C11F" offset="100%"></stop>
						</linearGradient>
				</defs>
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
						<g id="mark" transform="translate(-1.000000, -1.000000)">
								<path d="M5.92622289,5 L32.908,32.35 L38,27.19 L38,41.9989912 L23.39,41.999 L27.982,37.344 L1,9.99351645 L5.92622289,5 Z" id="Combined-Shape" fill="url(#linearGradient-1)"></path>
								<rect id="Rectangle" fill="url(#linearGradient-2)" x="23" y="49" width="29" height="7"></rect>
								<path d="M28.7427743,1 L33.756069,5.95026797 L33.709,5.996 L53,25.0441587 L52.034,25.998 L52.4979471,25.9983175 L52.4979471,42 L45.4080778,42 L45.408,27.448 L28.696,10.946 L23.0132947,16.557985 L18,11.6077171 L23.682,5.996 L23.6364169,5.95026797 L28.6497116,1 L28.696,1.046 L28.7427743,1 Z" id="Combined-Shape" fill="url(#linearGradient-3)"></path>
								<path d="M9.86666667,19 L15,24.0023516 L11.773,27.146 L11.7737037,56 L4.51407409,56 L4.51407409,25.681171 L4.99,25.681 L4,24.7169732 L9.86666667,19 Z" id="Combined-Shape" fill="url(#linearGradient-4)"></path>
						</g>
				</g>
		</svg>
  )
}



export function LogoBlack({ className }: { className?: string }) {

  return (
		<svg width="179px" height="56px" viewBox="0 0 179 56" className={className}>

				<defs>
						<path d="M63.60876,56 L63.26076,44.11 L64.94276,47.851 L69.37976,56 L75.64376,56 L75.64376,36.28 L69.72776,36.28 L70.07576,48.17 L68.36476,44.371 L63.95676,36.28 L57.69276,36.28 L57.69276,56 L63.60876,56 Z M86.468445,56.551 C90.528445,56.551 93.631445,54.405 94.414445,50.809 L88.527445,50.809 C88.121445,51.766 87.512445,52.172 86.468445,52.172 C85.076445,52.172 84.264445,51.186 84.003445,49.33 L94.298445,49.33 L94.298445,48.112 C94.298445,42.892 91.195445,39.702 86.294445,39.702 C81.451445,39.702 78.232445,42.776 78.232445,48.141 C78.232445,53.303 81.422445,56.551 86.468445,56.551 Z M88.498445,46.372 L84.090445,46.372 C84.409445,44.864 85.134445,44.081 86.294445,44.081 C87.454445,44.081 88.179445,44.864 88.498445,46.372 Z M102.77413,56.551 C104.25313,56.551 105.44213,56.29 106.08013,56 L106.08013,51.737 L105.03613,51.737 C103.32513,51.737 103.00613,50.925 103.00613,49.62 L103.00613,44.487 L106.08013,44.487 L106.08013,40.253 L103.00613,40.253 L103.00613,36.599 L97.38013,36.599 L97.38013,40.253 L95.64013,40.253 L95.64013,44.487 L97.38013,44.487 L97.38013,50.519 C97.38013,54.376 99.14913,56.551 102.77413,56.551 Z M130.0495,56 L130.0495,51.215 L120.8855,51.215 L130.0495,41.065 L130.0495,36.28 L114.1575,36.28 L114.1575,41.065 L123.3215,41.065 L114.1575,51.215 L114.1575,56 L130.0495,56 Z M140.149185,56.551 C144.209185,56.551 147.312185,54.405 148.095185,50.809 L142.208185,50.809 C141.802185,51.766 141.193185,52.172 140.149185,52.172 C138.757185,52.172 137.945185,51.186 137.684185,49.33 L147.979185,49.33 L147.979185,48.112 C147.979185,42.892 144.876185,39.702 139.975185,39.702 C135.132185,39.702 131.913185,42.776 131.913185,48.141 C131.913185,53.303 135.103185,56.551 140.149185,56.551 Z M142.179185,46.372 L137.771185,46.372 C138.090185,44.864 138.815185,44.081 139.975185,44.081 C141.135185,44.081 141.860185,44.864 142.179185,46.372 Z M155.96187,56 L155.96187,48.286 C155.96187,46.024 157.09287,44.777 159.49987,44.777 C160.25387,44.777 160.77587,44.835 161.35587,44.951 L161.35587,40.253 C161.03687,39.876 160.42787,39.702 159.76087,39.702 C158.33987,39.702 156.91887,40.485 155.96187,42.312 L155.96187,40.253 L150.33587,40.253 L150.33587,56 L155.96187,56 Z M170.556555,56.551 C175.399555,56.551 178.618555,53.448 178.618555,48.141 C178.618555,42.95 175.486555,39.702 170.556555,39.702 C165.713555,39.702 162.494555,42.776 162.494555,48.141 C162.494555,53.303 165.626555,56.551 170.556555,56.551 Z M170.556555,52.056 C169.048555,52.056 168.265555,50.693 168.265555,48.141 C168.265555,45.56 169.048555,44.197 170.556555,44.197 C172.064555,44.197 172.847555,45.56 172.847555,48.141 C172.847555,50.693 172.064555,52.056 170.556555,52.056 Z" id="path-1"></path>
						<path d="M66.643,30.464 C70.848,30.464 74.357,28.173 75.372,23.823 L70.442,23.823 C69.891,25.679 68.441,26.665 66.585,26.665 C63.569,26.665 61.887,24.258 61.887,20.169 C61.887,16.109 63.598,13.615 66.585,13.615 C68.557,13.615 69.949,14.659 70.5,16.602 L75.372,16.602 C74.531,12.107 70.935,9.816 66.701,9.816 C60.756,9.816 57.131,13.789 57.131,20.169 C57.131,26.549 60.756,30.464 66.643,30.464 Z M85.268685,30.464 C89.908685,30.464 92.953685,27.477 92.953685,22.199 C92.953685,17.095 89.995685,13.905 85.268685,13.905 C80.628685,13.905 77.612685,16.892 77.612685,22.199 C77.612685,27.332 80.541685,30.464 85.268685,30.464 Z M85.268685,26.868 C83.267685,26.868 82.165685,25.215 82.165685,22.199 C82.165685,19.154 83.238685,17.501 85.268685,17.501 C87.298685,17.501 88.400685,19.183 88.400685,22.199 C88.400685,25.244 87.327685,26.868 85.268685,26.868 Z M100.29837,30 L100.29837,21.039 C100.29837,19.038 101.42937,17.501 103.19837,17.501 C104.82237,17.501 105.60537,18.516 105.60537,20.488 L105.60537,30 L110.04237,30 L110.04237,19.589 C110.04237,15.732 107.80937,13.905 104.82237,13.905 C102.90837,13.905 101.31337,14.717 100.29837,16.457 L100.29837,14.398 L95.86137,14.398 L95.86137,30 L100.29837,30 Z M120.229055,30.464 C124.289055,30.464 127.131055,28.347 127.131055,25.273 C127.131055,19.096 117.474055,21.793 117.474055,18.719 C117.474055,17.878 118.228055,17.298 119.388055,17.298 C120.954055,17.298 121.882055,17.965 122.143055,19.56 L126.551055,19.56 C126.116055,15.616 123.274055,13.905 119.533055,13.905 C115.357055,13.905 113.240055,16.341 113.240055,18.951 C113.240055,25.215 122.694055,22.518 122.694055,25.534 C122.694055,26.491 121.911055,27.1 120.345055,27.1 C118.692055,27.1 117.503055,26.317 117.300055,24.867 L112.863055,24.867 C113.443055,28.724 116.285055,30.464 120.229055,30.464 Z M135.05574,30.464 C136.94074,30.464 138.47774,29.652 139.49274,27.912 L139.49274,30 L143.92974,30 L143.92974,14.398 L139.49274,14.398 L139.49274,23.359 C139.49274,25.36 138.39074,26.868 136.67974,26.868 C135.11374,26.868 134.35974,25.882 134.35974,23.881 L134.35974,14.398 L129.92274,14.398 L129.92274,24.78 C129.92274,28.666 132.09774,30.464 135.05574,30.464 Z M151.941425,30 L151.941425,9.12 L147.504425,9.12 L147.504425,30 L151.941425,30 Z M160.99711,30.464 C162.18611,30.464 163.17211,30.29 163.66511,30.058 L163.66511,26.723 L162.82411,26.723 C160.91011,26.723 160.50411,25.882 160.50411,24.374 L160.50411,17.762 L163.69411,17.762 L163.69411,14.398 L160.50411,14.398 L160.50411,10.773 L156.06711,10.773 L156.06711,14.398 L154.15311,14.398 L154.15311,17.762 L156.06711,17.762 L156.06711,24.925 C156.06711,28.55 157.66211,30.464 160.99711,30.464 Z" id="path-2"></path>
				</defs>
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="logoBlack" transform="translate(0.000000, -1.000000)">
								<path d="M5.45405845,5.00431099 L32.564311,32.114311 L37.681,27 L37.681,41.679 L23,41.68 L27.614311,37.064311 L0.504310986,9.95405845 L5.45405845,5.00431099 Z" id="Combined-Shape" fill="#000000"></path>
								<rect id="Rectangle" fill="#000000" x="23" y="49" width="29" height="7"></rect>
								<path d="M28.5459415,1.00431099 L33.495689,5.95405845 L33.4493398,5.99931099 L52.495689,25.0459415 L51.5413398,25.999311 L52,26 L52,42 L45,42 L44.9993398,27.449311 L28.4993398,10.949311 L22.8890873,16.5606602 L17.9393398,11.6109127 L23.5503398,6.00031099 L23.504311,5.95405845 L28.4540585,1.00431099 L28.4993398,1.05031099 L28.5459415,1.00431099 Z" id="Combined-Shape" fill="#000000"></path>
								<path d="M10.1611652,19.3890873 L15.1109127,24.3388348 L11.999311,27.4490873 L12,56 L5,56 L5,26 L5.45831099,25.9990873 L4.50431099,25.0459415 L10.1611652,19.3890873 Z" id="Combined-Shape" fill="#000000"></path>
								<g id="NetZero" fillRule="nonzero" fill="#000000">
										<use href="#path-1"></use>
										<use href="#path-1"></use>
								</g>
								<g id="Consult" fillRule="nonzero">
										<use fill="#1F0101" href="#path-2"></use>
										<use fill="#000000" href="#path-2"></use>
								</g>
						</g>
				</g>
		</svg>
  )
}
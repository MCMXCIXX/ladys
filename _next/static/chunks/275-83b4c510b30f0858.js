'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[275],
	{
		127: function (a, b) {
			b.Z = {
				src: '/_next/static/media/ArbitrumIcon.961694b8.svg',
				height: 32,
				width: 32,
			}
		},
		7624: function (a, b) {
			b.Z = {
				src: '/_next/static/media/ETHIcon.2507d4eb.svg',
				height: 32,
				width: 32,
			}
		},
		3498: function (a, b, c) {
			c.d(b, {
				Ew: function () {
					return C
				},
			})
			var d = c(5121),
				e = {
					setToken: function (a) {
						a && localStorage.setItem('accessToken', a)
					},
					getAccessToken: function () {
						return localStorage.getItem('accessToken')
					},
					getRefreshToken: function () {
						return localStorage.getItem('refreshToken')
					},
					clearToken: function () {
						localStorage.removeItem('accessToken'),
							localStorage.removeItem('refreshToken')
					},
				},
				f = c(3454),
				g = {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				h = !1,
				i = [],
				j = function (a) {
					var b =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: null
					i.forEach(function (c) {
						a ? c.reject(a) : c.resolve(b)
					}),
						(i = [])
				},
				k = 'https://milady.gg/api'.toString() || '',
				l = d.Z.create({ baseURL: k })
			l.interceptors.request.use(
				function (a) {
					var b = e.getAccessToken()
					return b && (a.headers.Authorization = 'Bearer ' + b), a
				},
				function (a) {
					Promise.reject(a)
				}
			),
				l.interceptors.response.use(
					function (a) {
						return m(a)
					},
					function (a) {
						var b = a.config
						if (401 === a.response.status && !b._retry) {
							if ((console.log('HET^! TOKEN '), h))
								return new Promise(function (a, b) {
									i.push({ resolve: a, reject: b })
								})
									.then(function (a) {
										return (
											(b.headers.Authorization = 'Bearer ' + a), l.request(b)
										)
									})
									.catch(function (a) {
										return Promise.reject(a)
									})
							;(b._retry = !0), (h = !0)
							var c = e.getRefreshToken()
							return new Promise(function (a, i) {
								d.Z.post(
									''.concat(
										f.env.REACT_APP_API_ENDPOINT,
										'/auth/refresh-token'
									),
									{ refreshToken: c },
									{ headers: g }
								)
									.then(function (c) {
										console.log('refreshToken ------------------------')
										var f = c.data.data
										e.setToken(f),
											(d.Z.defaults.headers.common.Authorization =
												'Bearer ' + f.accessToken),
											(b.headers.Authorization = 'Bearer ' + f.accessToken),
											j(null, f.accessToken),
											a(l.request(b))
									})
									.catch(function (a) {
										var b = a.response,
											c = b.status,
											d = b.data
										404 === c && (console.log('err.status === 404'), o()),
											d && 'REFRESH_TOKEN_INVALID' === d.error.errorCode && o(),
											j(a, null),
											i(a)
									})
									.finally(function () {
										h = !1
									})
							})
						}
						return Promise.reject(n(a))
					}
				)
			var m = function (a) {
					return a && a.data ? a.data : a
				},
				n = function (a) {
					var b = a.response.data
					return console.error(a), b
				},
				o = function () {
					e.clearToken()
				},
				p = l,
				q = c(3454),
				r = {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				s = !1,
				t = [],
				u = function (a) {
					var b =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: null
					t.forEach(function (c) {
						a ? c.reject(a) : c.resolve(b)
					}),
						(t = [])
				},
				v = ''.toString() || '',
				w = d.Z.create({ baseURL: v })
			w.interceptors.request.use(
				function (a) {
					var b = e.getAccessToken()
					return b && (a.headers.Authorization = 'Bearer ' + b), a
				},
				function (a) {
					Promise.reject(a)
				}
			),
				w.interceptors.response.use(
					function (a) {
						return x(a)
					},
					function (a) {
						var b = a.config
						if (401 === a.response.status && !b._retry) {
							if ((console.log('HET^! TOKEN '), s))
								return new Promise(function (a, b) {
									t.push({ resolve: a, reject: b })
								})
									.then(function (a) {
										return (
											(b.headers.Authorization = 'Bearer ' + a), w.request(b)
										)
									})
									.catch(function (a) {
										return Promise.reject(a)
									})
							;(b._retry = !0), (s = !0)
							var c = e.getRefreshToken()
							return new Promise(function (a, f) {
								d.Z.post(
									''.concat(
										q.env.REACT_APP_API_ENDPOINT,
										'/auth/refresh-token'
									),
									{ refreshToken: c },
									{ headers: r }
								)
									.then(function (c) {
										console.log('refreshToken ------------------------')
										var f = c.data.data
										e.setToken(f),
											(d.Z.defaults.headers.common.Authorization =
												'Bearer ' + f.accessToken),
											(b.headers.Authorization = 'Bearer ' + f.accessToken),
											u(null, f.accessToken),
											a(w.request(b))
									})
									.catch(function (a) {
										var b = a.response,
											c = b.status,
											d = b.data
										404 === c && (console.log('err.status === 404'), z()),
											d && 'REFRESH_TOKEN_INVALID' === d.error.errorCode && z(),
											u(a, null),
											f(a)
									})
									.finally(function () {
										s = !1
									})
							})
						}
						return Promise.reject(y(a))
					}
				)
			var x = function (a) {
					return a && a.data ? a.data : a
				},
				y = function (a) {
					var b = a.response.data
					return console.error(a), b
				},
				z = function () {
					e.clearToken()
				},
				A = w,
				B = '/api-bridge',
				C = {
					checkAddressWhitelist: function (a) {
						return p.get(''.concat('/airdrop', '/').concat(a))
					},
					getHistoryTransactions: function (a) {
						return A.get(''.concat(B, '/transactions'), { params: a })
					},
					createBridgeSignature: function (a) {
						return A.post(''.concat(B, '/signature'), a)
					},
					getTransactionByTx_Hash: function (a) {
						return A.get(''.concat(B, '/transactions/').concat(a))
					},
				}
		},
		5538: function (a, b, c) {
			c.d(b, {
				fs: function () {
					return d
				},
				pF: function () {
					return e
				},
			})
			var d = function (a) {
				return ''
					.concat(a.slice(0, 6), '...')
					.concat(a.slice(a.length - 4, a.length))
			}
			function e(a) {
				var b,
					c =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
					d = [
						{ value: 1, symbol: '' },
						{ value: 1e3, symbol: 'k' },
						{ value: 1e6, symbol: 'M' },
						{ value: 1e9, symbol: 'G' },
						{ value: 1e12, symbol: 'T' },
						{ value: 1e15, symbol: 'P' },
						{ value: 1e18, symbol: 'E' },
					]
				for (b = d.length - 1; b > 0 && !(a >= d[b].value); b--);
				return (
					(a / d[b].value)
						.toFixed(c)
						.replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + d[b].symbol
				)
			}
		},
		2293: function (a, b, c) {
			c.d(b, {
				Z: function () {
					return F
				},
			})
			var d = c(5893),
				e = c(5675),
				f = c.n(e),
				g = {
					src: '/_next/static/media/trust.png',
					height: 60,
					width: 183,
				},
				h = {
					src: '/_next/static/media/hat.e76496a9.png',
					height: 40,
					width: 47,
					blurDataURL:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAOVBMVEWZemluRTXAiXJyRzu5hXKUalWOZVJMaXHyvKFKKyJmQC3qrIzZmoCbZ1ase2mVZFRmPzPao4nGiXN+rqrzAAAAEnRSTlMDfbCV8QxvABctp/Hv8HL73YaalrPxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nB3IQQ6AIBDAwKJoFxQU//9YA7fJoEagWHrOQ6C+z3eHzGvXhLhvspDOBT3QHzLgAXkonx4FAAAAAElFTkSuQmCC',
				},
				i = c(7294),
				j = c(7568),
				k = c(4051),
				l = c.n(k),
				m = c(5538),
				n = c(555),
				o = c(3253),
				p = c.n(o),
				q = {
					src: '/_next/static/media/ic_wallet_okx.de40035e.svg',
					height: 32,
					width: 32,
				},
				r = {
					src: '/_next/static/media/ic_wallet.7bbd20d1.svg',
					height: 32,
					width: 32,
				}
			p().setAppElement('#__next')
			var s = function (a) {
					var b = a.isOpenWallet,
						c = a.setIsOpenWallet,
						e = a.onOpen,
						g = a.onOpenOkx
					return (0, d.jsx)(p(), {
						isOpen: b,
						onRequestClose: function () {
							c(!1)
						},
						style: {
							overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
							content: {
								top: '50%',
								left: '50%',
								right: 'auto',
								bottom: 'auto',
								marginRight: '-50%',
								transform: 'translate(-50%, -50%)',
							},
						},
						contentLabel: 'Example Modal',
						children: (0, d.jsxs)('div', {
							onClick: function (a) {
								a.stopPropagation()
							},
							className:
								'bg-[#FFFFFF] w-[85vw] md:w-[445px] h-[225px] rounded-2xl text-center font-font_primary',
							children: [
								(0, d.jsxs)('button', {
									onClick: function (a) {
										g()
									},
									className:
										'w-full h-[52px] flex items-center justify-center border-solid border-[1px] border-[#000000] shadow-[2px_2px_0px_#121212] mt-4 mb-[24px]',
									children: [
										(0, d.jsx)('div', {
											className: 'w-[32px] h-[32px] mr-[10px]',
											children: (0, d.jsx)(f(), { src: q, alt: 'icon' }),
										}),
										(0, d.jsx)('div', {
											className:
												'font-bold text-[16px] leading-[24px] text-[#262626]',
											children: 'OKX',
										}),
									],
								}),
								(0, d.jsxs)('button', {
									onClick: function (a) {
										e()
									},
									className:
										'w-full h-[52px] flex items-center justify-center border-solid border-[1px] border-[#000000] shadow-[2px_2px_0px_#121212] mb-[24px]',
									children: [
										(0, d.jsx)('div', {
											className: 'w-[32px] h-[32px] mr-[10px]',
											children: (0, d.jsx)(f(), { src: r, alt: 'icon' }),
										}),
										(0, d.jsx)('div', {
											className:
												'font-bold text-[16px] leading-[24px] text-[#262626]',
											children: 'Wallet Connect',
										}),
									],
								}),
								(0, d.jsx)('button', {
									onClick: function () {
										return c(!1)
									},
									className:
										'w-full h-[44px] bg-[#121212] text-[#FFFFFF] font-bold text-[16px] leading-[24px] shadow-[2px_2px_0px_#121212] border-solid border-[1px] border-[#FFFFFF]',
									children: 'Close',
								}),
							],
						}),
					})
				},
				t = s,
				u = c(9077),
				v = function () {
					var a = function () {
							s ? w() : x()
						},
						b = (0, i.useState)(!1),
						c = b[0],
						e = b[1],
						f = (0, u.$4)(),
						g = f.connect,
						h = f.connectors,
						k = (0, i.useState)(!1),
						o = k[0],
						p = k[1],
						q = (0, n.k_)().open,
						r = (0, u.mA)(),
						s = r.isConnected,
						v = r.address,
						w = (0, u.qL)().disconnect
					function x() {
						return y.apply(this, arguments)
					}
					function y() {
						return (y = (0, j.Z)(
							l().mark(function a() {
								return l().wrap(function (a) {
									for (;;)
										switch ((a.prev = a.next)) {
											case 0:
												return p(!0), (a.next = 3), q()
											case 3:
												p(!1)
											case 4:
											case 'end':
												return a.stop()
										}
								}, a)
							})
						)).apply(this, arguments)
					}
					function z() {
						return (z = (0, j.Z)(
							l().mark(function a() {
								var b
								return l().wrap(function (a) {
									for (;;)
										switch ((a.prev = a.next)) {
											case 0:
												if (void 0 !== window.okxwallet) {
													a.next = 3
													break
												}
												return (
													'ontouchstart' in document.documentElement
														? window.open(
																'https://www.okx.com/download?channelId=ACEAP6502255',
																'_blank'
														  )
														: window.open(
																'https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge',
																'_blank'
														  ),
													a.abrupt('return')
												)
											case 3:
												try {
													;(b = h[0]), g({ connector: b })
												} catch (c) {
													console.log(c)
												}
											case 4:
											case 'end':
												return a.stop()
										}
								}, a)
							})
						)).apply(this, arguments)
					}
					return (
						(0, i.useEffect)(
							function () {
								c && e(!1)
							},
							[v]
						),
						(0, d.jsxs)(d.Fragment, {
							children: [
								s
									? (0, d.jsx)('button', {
											onClick: a,
											type: 'button',
											className:
												'flex items-center justify-center font-font_primary w-[105px] lg:w-[154px] h-8 lg:h-[40px] px-4 lg:px-0 text-[#000] bg-[#fff] font-bold text-[14px] lg:text-[16px] leading-6 border-solid border-[1px] border-border_color shadow-[2px_2px_0_#121212]',
											children: (0, m.fs)(v),
									  })
									: (0, d.jsx)('button', {
											onClick: function () {
												e(!0)
											},
											disabled: o,
											type: 'button',
											className:
												'font-font_primary w-[105px] lg:w-[154px] block px-1 h-8 lg:h-[40px] text-[#FFF] bg-[#000] font-bold text-[14px] lg:text-[16px] leading-6 border-solid border-[1px] border-border_color shadow-[2px_2px_0_#121212]',
											children: 'Connect Wallet',
									  }),
								(0, d.jsx)(t, {
									setIsOpenWallet: e,
									isOpenWallet: c,
									onOpen: x,
									onOpenOkx: function () {
										return z.apply(this, arguments)
									},
								}),
							],
						})
					)
				},
				w = v,
				x = c(1163),
				y = c(127),
				z = c(7624),
				A = [
					{
						icon: z.Z,
						href: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x12970E6868f88f6557B76120662c1B3E50A646bf',
						address: '0x6e42386AEe73322ac9B7D5B5467088e0d14EF7bc',
						name: 'Ethereum',
					},
					{
						icon: y.Z,
						href: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3b60FF35D3f7F62d636b067dD0dC0dFdAd670E4E',
						address: '0x6937c350251CFCc1770E047f69c9Bc032Fe29E51',
						name: 'Arbitrum One',
					},
				],
				B = function (a) {
					var b = a.setShowBuyNow
					return (0, d.jsx)('div', {
						onClick: function () {
							return b(!1)
						},
						className:
							'inset-0 fixed bg-[rgba(0,0,0,0.8)] z-[10000] flex justify-center h-full',
						children: (0, d.jsxs)('div', {
							onClick: function (a) {
								a.stopPropagation()
							},
							className:
								'bg-[#FFFFFF] w-[90%] py-[32px] px-[16px] md:w-[392px] md:h-[256px] rounded-lg md:p-[32px] fixed top-52 text-center font-font_primary',
							children: [
								A.map(function (a, b) {
									return (0,
									d.jsx)('button', { className: 'w-full h-[48px] px-[16px] py-[8px] border-solid border-[1px] border-[#000000] shadow-[2px_2px_0px_#121212] mb-[24px]', children: (0, d.jsxs)('a', { href: a.href, target: '_blank', className: 'flex items-center justify-center', children: [(0, d.jsx)('div', { className: 'w-[32px] h-[32px] mr-[10px]', children: (0, d.jsx)(f(), { src: a.icon, alt: 'icon' }) }), (0, d.jsxs)('div', { className: 'font-bold text-[16px] leading-[24px] text-[#262626]', children: ['Buy $LADYS on ', a.name] })] }) }, b)
								}),
								(0, d.jsx)('button', {
									onClick: function () {
										return b(!1)
									},
									className:
										'w-full h-[44px] bg-[#121212] text-[#FFFFFF] font-bold text-[16px] leading-[24px] shadow-[2px_2px_0px_#121212] border-solid border-[1px] border-[#FFFFFF]',
									children: 'Close',
								}),
							],
						}),
					})
				},
				C = B,
				D = [
					{ title: 'Home', link: '#home' },
					{ title: 'About', link: '#about' },
					{ title: 'How to buy', link: '#howtobuy' },
					{ title: 'Tokenomics', link: '#tokenomics' },
					{ title: 'Roadmap', link: '#roadmap' },
					{ title: 'ARB Bridge', link: 'bridge' },
				],
				E = function () {
					var a = (0, i.useState)(!1),
						b = a[0],
						c = a[1],
						e = (0, i.useState)(!1),
						j = e[0],
						k = e[1],
						l = (0, i.useState)(''),
						m = l[0],
						n = l[1],
						o = (0, i.useState)(!1),
						p = o[0],
						q = o[1],
						r = (0, x.useRouter)().asPath,
						s = function () {
							c(!b)
						}
					return (
						(0, i.useEffect)(
							function () {
								if ('/bridge' === r) n('bridge')
								else {
									var a = r.split('#')[1]
									n('#'.concat(a) || 0)
								}
							},
							[r]
						),
						(0, d.jsxs)(d.Fragment, {
							children: [
								(0, d.jsx)('div', {
									className:
										'navbar w-full z-20 top-0 left-0 shadow-[0_4px_6px_rgba(49,11,49,0.08)]',
									children: (0, d.jsxs)('div', {
										className:
											'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[10px] md:px-[8px] md:my-1',
										children: [
											(0, d.jsxs)('div', {
												className: 'flex items-center gap-x-6',
												children: [
													(0, d.jsx)('a', {
														href: '/',
														className:
															'flex items-center w-[76px] lg:w-[124px] h-auto md:w-[116px]',
														children: (0, d.jsx)(f(), {
															src: g,
															className: 'mr-3',
															alt: 'token logo',
															objectFit: 'contain',
															quality: 100,
														}),
													}),
													(0, d.jsx)('div', {
														className:
															'hidden md:items-center md:justify-between w-full md:flex md:w-auto md:order-1',
														id: 'navbar-sticky',
														children: (0, d.jsx)('ul', {
															className:
																'flex flex-col py-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-1 md:mt-0 md:border-0 ',
															children: D.map(function (a, b) {
																return (0, d.jsx)(
																	'li',
																	{
																		onClick: function () {
																			s(), n(a.link)
																		},
																		children: (0, d.jsx)('a', {
																			href: '/'.concat(a.link),
																			className:
																				'block py-2 pl-3 pr-4 font-semibold font-font_primary text-[16px] leading-[24px] '.concat(
																					m === a.link
																						? 'text-[#EB2F96]'
																						: 'text-[#000]',
																					' text-opacity-100 hover:text-[#EB2F96]'
																				),
																			children: a.title,
																		}),
																	},
																	b
																)
															}),
														}),
													}),
												],
											}),
											(0, d.jsxs)('div', {
												className:
													'flex md:order-2 md:gap-x-3 gap-x-2.5 items-center',
												children: [
													(0, d.jsxs)('a', {
														href: 'https://ladyf.xyz/',
														target: '_blank',
														className:
															'relative flex items-center justify-center bg-gradient-to-r from-[#872DFF] to-[#10FF99] w-[105px] lg:w-[154px] h-8 lg:h-[40px] font-font_primary text-white font-semibold text-[14px] lg:text-[16px] leading-6 border-solid border-[1px] border-border_color shadow-[2px_2px_0_#121212]',
														children: [
															(0, d.jsx)('span', {
																children: 'Milady Wif Hat',
															}),
															(0, d.jsx)('div', {
																className:
																	'absolute top-[-16px] right-[-22px] block',
																children: (0, d.jsx)(f(), {
																	src: h,
																	alt: 'hat',
																	priority: !0,
																	objectFit: 'contain',
																	quality: 100,
																}),
															}),
														],
													}),
													(0, d.jsx)('button', {
														onClick: function () {
															return q(!0)
														},
														type: 'button',
														className:
															'hidden lg:block w-[85px] lg:w-[120px] h-8 lg:h-[40px] font-font_primary text-color_text font-semibold bg-[#fff] text-[14px] lg:text-[16px] leading-6 border-solid border-[1px] border-border_color shadow-[2px_2px_0_#121212]',
														children: 'Buy Now',
													}),
													(0, d.jsx)(w, {}),
													(0, d.jsxs)('button', {
														'data-collapse-toggle': 'navbar-sticky',
														type: 'button',
														className:
															'inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200',
														'aria-controls': 'navbar-sticky',
														'aria-expanded': 'false',
														onClick: function () {
															return k(!j)
														},
														children: [
															(0, d.jsx)('span', {
																className: 'sr-only',
																children: 'Open main menu',
															}),
															(0, d.jsx)('svg', {
																className: 'w-5 h-5',
																'aria-hidden': 'true',
																fill: 'currentColor',
																viewBox: '0 0 20 20',
																xmlns: 'http://www.w3.org/2000/svg',
																children: (0, d.jsx)('path', {
																	fillRule: 'evenodd',
																	d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
																	clipRule: 'evenodd',
																}),
															}),
														],
													}),
												],
											}),
											j &&
												(0, d.jsx)('div', {
													className: 'w-full md:hidden',
													id: 'navbar-sticky',
													children: (0, d.jsx)('ul', {
														className:
															'flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white',
														children: D.map(function (a, b) {
															return (0, d.jsx)(
																'li',
																{
																	onClick: s,
																	children: (0, d.jsx)('a', {
																		href: '/'.concat(a.link),
																		onClick: function () {
																			return k(!1)
																		},
																		className:
																			'block font-font_primary py-2 pl-3 pr-4 font-semibold text-[16px] leading-[24px] text-[#000] hover:text-[#EB2F96]',
																		children: a.title,
																	}),
																},
																b
															)
														}),
													}),
												}),
										],
									}),
								}),
								p && (0, d.jsx)(C, { setShowBuyNow: q }),
							],
						})
					)
				},
				F = E
		},
	},
])

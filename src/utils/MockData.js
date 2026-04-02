const cardsList = [
                // {
                //     "title": "Collections",
                //     "subtitle": "Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends",
                //     "seeMoreText": "All collections in Bengaluru",
                //     "seeMoreUrl": "\/bangalore\/collections",
                //     "collections": [
                //         {
                //             "id": 13,
                //             "name": "Sky high sips",
                //             "num_places": "39 Places",
                //             "url": "\/bangalore\/rooftop",
                //             "image": {
                //                 "url": "https:\/\/b.zmtcdn.com\/data\/collections\/2b9361aa328a43b08986f77bbec280bd_1709810493.png",
                //                 "base64": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA\/wD\/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6AMHEDMhSJCnOAAABq9JREFUaN7tmU2PJEcRhp83MrNqGtbczc0SYHHg\/\/8QhEAWSD4Akg0HvLuzM12VEcEhsz9mPV4ZZIkW6pBKVV2dH\/FGREa80a3MTP4PxP7XCtyB3IHcuNyB3Jrcgdya3IHcmtyB3JrUiPjeSyHQT71V\/qhXnxTp5eSr+XXbjpy0PgGQdH738WTlf6bB6\/bIV55+AH6e1NDr60w89e2\/vgMJXV1mBjIkewVIzu3zSsnvb3I2hUBTXb3YPKei4+nSTOhazTNQMfW7+jZP62RS\/\/63v04AhplRSqGUiuY1AM3pGSgDpaMTEJ08qcvugE0AxrhLeQaiTJIkMokY98xr84yRkSeAQiZM4zqtE5lkBJFQ\/\/ynPyIzZIVaCq01alspy4rqgqyBjZygcBQ7yo6lY4CZpufsrIABpqQICkEhMeUEn0CQGXgE3Z0eiQdE6gwkEzwv74oZtRjVhA1\/EDHWiEjqV3\/4PWmGWaXVyrKuLOuB+vAzrB1QXaHUYavomB8xP1KyY4JSCmYVWRmAgAIUQVPQlAOMgkJMQE6Gs4ez7c5zdzZPekDk9GGKnsJjmKaWwlILSzGKjVj0CHoE7kH9+i9fkRRkRmuNh3VhPfycdniD1jeoHaC0YafYUH+i9CdK7hRBrY1SF6w0zCqGJoikKVgUNAVVQWXcTU5GZ\/POh23ncet82IOtJ54CjEzhIXoIZLRaObTGWgutGGIA2T3Y3an\/\/PZbYrqz1cLDuvBwONAOn2EPn8HyBuo6QsuPaH\/E+gcsNqpBqwt1OVDbA9UaxcoZyKJgldPk0zsXUJmdre88bhvfPW28Pe487U73AUQYHoankCprazwvjcPSWGrBAI9kc2frTn16PtIjIYJm4EvFtyfatqHjDusO7TDi34+wvYftPRbbUHhZWdadZenUulJLpUpUhjeOCpqcZXpnsQEEnK1vPD4fef905O3Tkcfjzu6Jhl\/JtBktlX1ZiL6SvtJrxSQ8gq07x+7ULQ33Du6kHMsdU5ASNqIdAlJG9o04HontGfUjxUTrsEZjz0aLQjUoZhRyhpLTiBlmyWJJNVDC7uL9Bu+Owbvnzvvnje6BEEVzbypWmIACWeKMJOkBW4djT6rL6AgyUTgO+C6sFrIuqK+kKqmKe8fd8R7QA5PoOF46bp09O6UI00i7NtPv8JCogsWMOjNYj8LTVnm3F97vxuMO3k9ARt1AgZFEQIYRYSwxalwPsXmydVE9Rz4mr\/J6dNIdoo8rO4lmugMPETHyeViSuxO2U9KwkqAyS9hIyMYpFUPVyGiGiDCOu\/FhL3zoxnM33IVlYooBxEbqdhfuortRbQLx4dXdRc3YyegQI7enEsJQOhYO6RBOSmQ4mUEAgVAm3QP6jkuYB9hOUkcoTiiaBXJ4KKfHkkyn92TbkmOHzSH6HMMJiCOCvQR7D7Yy6hKa6XdPek+qZScJUCI0NhTn0FA6kX0snoERFIFMjB8pA49O7sxzNkrgLIOXQjkrvfJSHMkgouPd2T3wGCGknMVTQArJcXeiO704hiONgtjdRx15qKKrkGZUCtWSUo1SKrUYMkYSgFHUyqAEIRFp5NiNpJMRJE6kERipAipnihMTOHmu34CT0\/pmBsUgJpea1Ecan5yADCydsWswyw71F5+9oYcIh5LBYslaxbo06vKAlgZlhEqEiFiIMCLaOFMMGnG6ezLGTW\/IBvEcx3Byqgw0OZpJECKb4b0QvRPhk2QJrKC6YG3Bloa1itXBJIZTnYxC\/fzzX9LDpksHpVgK1FqotWG1oVKmMjnOEUmekkMOAw6uNIrU4Ed2oS2yOT6ICGJ6xIxBAjPI8JkROxFBxuTHVgaBresAM1nEWHtQlYygfvGrL\/EwMgeQopy1QINHlYJMg0ZfyPekfoOxRjIzHngmeQIyGTVz5iB4MUNsEM4izfOSA4jHedygEwZWUa2oNOzEzCcrP82tv\/nt76YF50Ekz5aySZ014\/TcC+hlr3Ci2zF7i8iZrc6b6cJWMzn9kzFo+WiaMsf3EQPw2SMSTHYuK8NDs1e66JTUL379JddNn8i5+KmZuW6QTkBeNj+nTi659BVnIHN85iUc8zJiGorzGRo9Rp69xuxWZYM8nppA0DmJiET\/+OabF92myBdKn9tfXhFd0OTl8cWAExDOnWCSV9N1stKVETLz5UJnS17ab32kgJ6fnl5tm3U97r+WjxdI8hMjriPjh3r513t3kLt\/sv\/\/qX9MeW0zfeK7Hyu6\/4d4Y3IHcmtyB3Jrcgdya3IHcmtyB3Jrcgdya\/JvUCxb3BihUMwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDMtMDdUMTY6NTE6MzMrMDU6MDAlVJ+1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTAzLTA3VDE2OjUxOjMzKzA1OjAwVAknCQAAAEN0RVh0c29mdHdhcmUAZmlsZTovLy91c3Ivc2hhcmUvZG9jL2ltYWdlbWFnaWNrLTYtY29tbW9uL2h0bWwvaW5kZXguaHRtbA\/X5TgAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf\/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADQwMHlaadsAAAAYdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTUwMMH\/YNQAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc\/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTcwOTgxMDQ5Mx4dxwEAAAASdEVYdFRodW1iOjpTaXplADMzOEtCQkZSvcgAAAAgdEVYdFRodW1iOjpVUkkAZmlsZTovLy90bXAvcGhwUFBvNUVTMFZ9xQAAAABJRU5ErkJggg=="
                //             },
                //             "is_visible": true
                //         },
                //         {
                //             "id": 29,
                //             "name": "New in town",
                //             "num_places": "35 Places",
                //             "url": "\/bangalore\/newly-opened",
                //             "image": {
                //                 "url": "https:\/\/b.zmtcdn.com\/data\/collections\/6922d49fb675d0490edb652abf5ca45f_1727171292.png",
                //                 "base64": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA\/wD\/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6AkYDxIM1GBViwAAB6FJREFUaN7tmV1z47oNhh+AlGTHSXan0\/7\/f9dpT8\/ZzSa2JZEE0AvKjjeb9qadaaYTzNBSLNLEiy\/iVSQigv8D0f+1Ap9APoF8cPkE8tHkE8hHk08gH00+gXw0yf+dnjF+vhUuH\/Drn+8u+0nk1znxbxcL2axdv49fpgvyVoEN+OX7uN3oapS+TkQQEUJA4j0kN+rcGlTen3TZI2LT9GZJLuvSH9yMi6YXReSnzQJ5A8S3dR6veqgqSRVNiqqiHdlPRnvV\/XL\/+gPv2c8jcPdt3AAC8svzdyICc8fN8KvFNwVU+\/4REI5EIBLoDRDzoJlj3hVSFXJKjMPAOA4MOaNJEdFtTQf9qwEvQG6N1Tdy7zq2atRWqc0ws64WkL\/9\/nfMjdYarTXMnACSJlLO5JQ2IA5uSDhJgqR9C4+gNmdtTm2GO6SkTOPI3X7H3X7HfjeRhwEVxa9K9eHerdzBOIhvHg2S9ogAwTyopbGshXlemJeFUls3HpD\/8dtfaa1SSqGUQmuNQMh5YBgGhiF367uBN9QbWYOsIAjmzlqduTSWYpgHKSUO+x2PD\/d8ebjH7g+M04RqwhyaObX51Ytmjrl1IDhJg5xgSEJKiojQzJmXyvF44vn5yMvxxHlZqeZ4QH764zdKWVmWmXlZqLUBwjAOTOPEMGSSAN4Iq2g0sgSDdtc3c+ZinFdjXhvNgpQTD3d31K+PRP1KtEd2uz2iiWrBWp2yebA2vwFigJPVGbOwG4VpSIgqtRqn88L3pxf++PbE96dnXk4za620gDyfnlmWhdP5yPl8Zi0VQRinid00MQ4ZlSCsglXEG1mcrD1BqjlzcU5LYy6NakFOmXp\/QKMypCBLYK0Qkim1A1+KdTDmtGZbfhqKMaRgPwq2S9iUUBVKaby8nHj69oNvv3\/n929P\/Hg5cV4rzYPsVml1pSwz8\/nEuhZEBGuVsIoNCcEJq0Sr4I0UhkqP79o6kHMx5mKYwzBkBGc\/ZQ53E9M49opDYqnOebkAsS3MGtYaEUYSZ8rApCRPiCVEYVkKx5cjx+cnXp6feHn+wfPLmfNSKGbkIWm3uBtWK7WsgBARCI63hGBYq3jbwITBVkVKdZbak720IBAmG5iGgbUUSun5pynhoazFWBdjrd0jrTVqbbRWCDeyOjIIo2SqZjQSgXOeF47HI6fTifk8sy7rltcrazPyOGZy6mXRzKi1Xsupm\/Vn4VgrVzBuPRRqc6oFpQXVAw8hpR7TzXoyt61Mdosr0YywBmaIO1jD24qVlbCKKDgJS0ZVJ1xorXE8z7y8nDidZpa10MyIrdpBkKdxIKcEQDNjWSu1NVQry7qBjK6I1Yq12u+3ylMtsABH0ZQYR2H02A7JrVuIQOgezmKMaoQ6EgbSaFGptuKt4AquGUvOKs5aYC2F5+OZ55czx\/PCWgpmBgSqQgolDzkjorgHpRrzUpiXAoAm7bU8AvdGtIa3htkNEO8gJCWGYdhCqB9kcWlXgCSgEkgKSIFGkAhQp9JQL70gaGDq1BqYG+bOaV54Pp748XLidO4eqc16+IugSckpZUTkFchaOc0r7t4nqaB4DwM3cCN8S1ILmgshioaQUj9mRQS5dgX9mlXJCglFQ6\/A3IRVg4RjW+65CbUK0Yy19rB6Ps0c54VlKdRquDtsIBKQNSVEEyHane\/QLGjNu+tksyZOwtHo7YMiqICKEFtflVIi59wP0jyQriOTcmZQIaugIog6IUJtxpASWRXb+h7ZTn8nqO2mMFhgACoIuXuUzkVyziN5mBjHPdN0x7RbKAZaW49tgSxB2q5Zes9lHlSDFgKaSMPAbjdxuNtzONxzdziw3x+YdnvytCePO3KS3ubkBtXx1KguDKUxbgcxeC8YKdE8SK4MozNWxxw0Dd0bW3tkgAF52t9zuC98+bpyXhohA\/vDTK2NiEA3EEnorYn08PHoQCwEVEl5YLcbudvvub+\/48vjA49fvnB4eGR\/eGDaTwxJIIJkhjZDSsPTDmMAHRh3CxLR2xJNWARjbeTdyrhfrrnh4ddu2ACLIB8e\/0T1TGMgDXc8fD1yntde3i5hdAXTr9duNDYgoqScGMeR\/TSy3++5P9zxcH\/g4eHA\/d0du2kkJ90KRy\/NQ22k\/Ura3TPdz7RarkBUe4NZmrGUylIKpVaa2bWFd3rnbRHkh69\/QccD4\/6Rhy9\/5jwvrKViW42+tNO65YvKK59wB6fzDFUl58w4ZKZpZJom9ruJ3W732uqoInQlzIJmjalU9utKWVfMGkJ0HqOCbxShtkZtRrNexV75T6cDHoH8+ONvUUplLSvrWii1bYdNXBmjXMYN4bmQmoj+pYiSUh\/5mvSZIQ\/knHrcbyQtNi5i7jRrtNopRIS\/Gk62k2fzoF0I1ZW\/bMbcrrLMx3Dzfvra64JXvhY\/sbWf6HS8ss0Lm1SVreTKZtlLGb5wixtDxCsf6XEfV6O9frxa\/2KAW0Ne9BRrNX5mapfTmPdFeP+ZXC4XDwly4fzb\/dv1l326UnF9cfEuZY83bxTi1dAA4u7x9ul\/+l7llqK+g\/Vm+7cS78x8M\/tf6Cef\/0P8YPIJ5KPJJ5CPJp9APpp8Avlo8gnko8knkI8m\/wRQED0HC4Jk0QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wOS0yNFQxNToxODoxMiswNjowMKJUN1UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDktMjRUMTU6MTg6MTIrMDY6MDDTCY\/pAAAAQ3RFWHRzb2Z0d2FyZQBmaWxlOi8vL3Vzci9zaGFyZS9kb2MvaW1hZ2VtYWdpY2stNi1jb21tb24vaHRtbC9pbmRleC5odG1sD9flOAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp\/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANDAweVpp2wAAABh0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxNTAwwf9g1AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNzI3MTcxMjkyb340CAAAABJ0RVh0VGh1bWI6OlNpemUAODU1S0JCUb9gdgAAACB0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL3RtcC9waHBseDQ1ZXZw06aQAAAAAElFTkSuQmCC"
                //             },
                //             "is_visible": true
                //         },
                //         {
                //             "id": 307111,
                //             "name": "Omakase bars ",
                //             "num_places": "10 Places",
                //             "url": "\/bangalore\/omakase-bars",
                //             "image": {
                //                 "url": "https:\/\/b.zmtcdn.com\/data\/collections\/29a1053b9dc17770c25e849df32b7a8f_1752236513.png",
                //                 "base64": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA\/wD\/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6QcLETM0UIXjOQAABmZJREFUaN7tmU2v7EgNhh+7nJwzlwULECCEQOL\/\/yUWiB0wYmD6K0nZZuFKuvvOmRUjzRFqS6VU0q4qv\/4qWy2ZmfwfkP7cAryAvIB8cnoB+Wz0AvLZ6AXks9ELyGcjI4Mfrxrlg28\/TY0pH7x9vHM+HyvPa\/ZXC+9AFt\/jTvLMCJA\/YPox+ojnvpMIJLIf8cB959nPyqyXJItRpLjkvh7AfDmRCZn5vKF8pbWxD498j5Mn\/vzBupJBaqigUu\/7ecUjNU\/GCCJqZCSZCSKoCKqKaIESAVv+8w8ik4gkHoDIQC4USMYzM4kB\/FFekRKntJVPAHYhRQRtijWlqaBa31JqZaQSWUAiEu8d752+bXR3IhIRpTXFrKGtocMydvnnX\/EIPBI\/\/FCLYbfxDiASjxxa2q1YG+kO5MEyCaWkHcgQYJ6MeVLMFBUlRQmUnoqH4AF962zLyrLcWG4L27rhHogqNhnTNDFZQ1VRATv\/\/S90D\/oAkgiiiiJl8EgyA\/cC0L1Gvd9dpsy9u08BiVqOA0FZY56Nb96Nb96MeWq0pqQ0nMYWyuqwrsG6rNwuV67nM9fzhdttoQ8g0zwzzxNmVpYVsMu3f6NH0j3xYQ0ZFiGCjCA88Ah6DzYPtl5zjyRy9\/vSrqqAKIgUiCwFhQjNGm9vxpd34xfvxvvcMGugjZ7K6sJ1Ta63jev5xuV05nL6nsvpxPW60LsfQKZ5ursWid1O\/xpulQSKaENEh1sF4U540D3LGj1Yu7Nt9a2sqIjua0uwchfBB5gAWlPe5sa2GP3WWGZlmmqdp3DbkvNt43xeOJ+unE8nrt+fuF7O3G7L3bXMUDNAiEwgsG1bRqALKYpkoNoqbLMsUtli+L9CUwhNIpMMCILMskDlViVoA4gMIEl3iA2SUs62wWRlUU+4rZ3zZeV0vnI+XbmcLyzXC+vtxratZAQiSrqSq1Y4eCnbtj4EAlISyUTJcpcU0FbCIzQDi8QjmEaceICnEtIIjBQj1B6AcFicTEQCz2TplVK3LRCpPZdl43q9cbveWJcb3jcyA1VhnhrkSLkixIjdSEdw7NZH6h2XjmiimiMbVL5uTWmtMsRxC2eWFZAhdA0fI6hMdMTJcR84ko5mBzqRDpG4O+EOEWgGpsCkmE4wK+SEjuzIyIZbd7Ze6+y6Jt2d3usg4BDeWmOajGky5gmmSWhNB8gRE9pAjRDDU8cogHmMuhcqbTvhHXyF0PK1cFwCTUWiYUy8mRBuZDoVhYlKuXWFbyUgdycjsNPibNtGXzf6tkEGIoI1rXw\/T7y\/z8TbTMTMZIaZITZV6jND20RIQ0OQAImKicpilQgQGXeRk6GkC7iO+Ua40LuwzULvrSyUMUCASNIe7qvyiBHDEdhlDfrqbMuGbyt4r7xsSnQjoyPEEfgxz8MNhVTFNEhJgspi2+a4e3lga7RpwlqlSlQgW1U0ARKVGDIaGZ1ww30usBnl6iN\/6LhsdbdxJpllDTKxLcodAq07RBuq0HRoU3SUD+AJ4gla8oRX9pL0uiw3Z1033B0RmCYrl1AZdVGrOgulNUORcicCcoL0UhhxADjGEL6ed8XuT9P5C9JmzN6Q6DQJmsLUqoQwM2yykbsnsIm0iTDD2wQyVbr1YOvQO7jf\/dlDaFlVm1AVAKI0CVQaJonKPZpUEpECX+OhyM+oS\/oBSGZAJPbll79Gs3JMo0CYUoVdE1Qb2hRtDVFDmtW8Wf0mWnVKC5pspHY0HBXBpkZ7n5F5RqYJmpLlH3UvKcP6HBnpeG8yyg8ZRehwp90KWem75on96nd\/rJgYGjSFpvJUnYrUCXVrK2gbblhaJpPsge\/xEYGK0EyxuW5hsTZKF2hS50wqmIKqjECWA0gpcciwtw8ZxzMfillI7Ld\/+HMJLjIA1Mb62LjIKOiHW6Rogdsr3eCoycrcQ7utCsVK0XJv1g4wde7em+humUORjz3Lg+A7iIfu0X7z+z+VJo6NZATYB23uAJQ7sPv1eG989j5laFj0iNaqrMdWhyvt5yFPwX2X47G5y+N5b4VqJv\/+7tu8byJP\/YQ8sfKw6wcgj+brgeNBkHzY7WhVj4ZsZ+b5m3x4Eh\/9NyXrsuTjgo8M8cDOT00fGv7pqNEXfa3Ur9dE+KMOf1b6XySQ13+In4xeQD4bvYB8NnoB+Wz0AvLZ6AXks9ELyGej\/wIAF3CiNk8V\/wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wNy0xMVQxNzo1MTo1MiswNTowMLKtj4YAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDctMTFUMTc6NTE6NTIrMDU6MDDD8Dc6AAAAQ3RFWHRzb2Z0d2FyZQBmaWxlOi8vL3Vzci9zaGFyZS9kb2MvaW1hZ2VtYWdpY2stNi1jb21tb24vaHRtbC9pbmRleC5odG1sD9flOAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp\/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANDAweVpp2wAAABh0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxNTAwwf9g1AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNzUyMjM2NTEyFNZi7AAAABJ0RVh0VGh1bWI6OlNpemUANjU4S0JCmd\/Z2wAAACB0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL3RtcC9waHBqMkVyTGZLbtZWAAAAAElFTkSuQmCC"
                //             },
                //             "is_visible": true
                //         },
                //         {
                //             "id": 3,
                //             "name": "It's a date",
                //             "num_places": "43 Places",
                //             "url": "\/bangalore\/romantic-restaurants",
                //             "image": {
                //                 "url": "https:\/\/b.zmtcdn.com\/data\/collections\/2e8b954961d07f927802853d5944d67b_1709812883.png",
                //                 "base64": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA\/wD\/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6AMHER8Xv9kzOAAABvhJREFUaN7tmU1vJEkRhp+IzKrqbpud2csKiQPiAAf+\/4\/hACckdpHYYcZ2d1dVZkRwyKx22zOzjJAQFuqQ0vWZlfHGxxuRbYmI4P9A9H+twA3IDcgblxuQtyY3IG9NbkDemtyAvDXJEf5tb8aLw1dF\/gtKbmvKyz9XLwTZa\/l8Unz+ka1J\/hoQ+TfXX5rw+p3Pvh2v7wkigAjSZwfRgJTTAyBXCreHcTlvR49o1\/35a2W3cxHQrqW8UvD6HdlOXhr2M2Aez6uJCCKKqiIqDWg4Zk4+ffjpahJYgEXg0a7d27V54B4XQNdeln6uQFJQEVRoC78CIv2+yvP8zWDXHrjWxwMCQVVJObehiSCwWimlkh\/+9mcCwSKoDsWC1YNqUDyoHlQLigXVHPNns8kViCSQBYYkDCrkJKSm9QuvaQea9CWQzXCXKKCBqA41IFA0ZfI4Mk4TOWcignVZmM8z+eNf\/0QAq8NcnHNxTiWYa7BYsFZnqe1YzTGL5xDqllWBQWBKwj4LU1bGrOSkFxzNGw1AVrl4LgjcoXpgvlkfHMECikMJwVEkDwzTjmm\/ZxhGzJ35dObp6Yn8+ONfqAFzDR5n49NsPM7G0+qcS3CuzlyegbgHCqgKSYUkMGgDcRiEuzFxNyamQRmSorrFdvda91buHvF49nixwCywnrM1hBpCQTFJkAbytGPcHUjDQK3G8Xji8eGBPH\/8icXgaTU+HCs\/Hyv\/PFY+Lc7T0jw016DU57DKXaEtjMYEh0FZJ8WmjE2J3ZAYckK1eS1t7yfBE9TuKTNnrc5anLUGpUbLU8AQKtqGJFwHZBhJww5JmVKNp6cjD49P5DI\/slQ4nSsPj5UPDyv\/eKp8PBmPi3EqwVKd2n2uAqMKUxampEy5xdU4JjwSTqZGZrWEafNI6gA0C3kQ3FtyuQelGEtxlrUdS1+rBlgHUUQpoVQSphlSJlDWahxPM0\/HU6sjtQTLUjnPheNp5fFYeDhXHueWL8Uaa0kPI0nKEAqdSQZXBoIBSCgShldwcVSFcCGJIijSadQdajXWYqxrG6UDKebUgBJQQikIiwurCyUEQ7GAtTrnZeU0L2SPFvtrNZZSmYu10S20Fqd4K4gqkBFEG9UOktgJ7JKwT8KUhEFAo1k7CDwEFUWIxljaYsoiWGowF7+sUy+E0sK4OpQwZhNmD5YKS79fA4o5SzHmtZK90+taWy4s1VnNqdao1y5KNeUFQaXlxqSNoXZJGVXJokhAeODhBELKLcmHJAy5JfqW4EtxzqszL04pjpsT3utUNF4OhzDHagNaLCgO5tHKgznmTt5QnVfntBjn0ui2eAunrTURuFBtVsgdzCjCIEJCwKIVU3ECEBVSSo3VsjJlJSVhrU2BZTVOszHPlVob92qvNYKQRTCCRJCBFEGKuFT7jQU9KblYo95jCU4lOJdgNbAQEEUkWvESmuJZGZMy5sSQ2kiqSLS4x1s5ExFybmB3Q2I\/ZnZjBoVqlQihViirs6yBVYfobIigSelRSCCX9kg0yN4YzRBKwOhBLpGYLZirs1iiEoQokpwsgWY65QpjEg5ZuRuUw5jYDcowJHLuvU9rf3oFb8+mcWS\/m9jvJ3b71OqDF1ICUQfxi7JCIKKItmKKChqBpEDUSdkZo4MQwUUviZ893+G5EkNFpkJ2Y5ec7K3fajnRYnyXhH1WDn3sOwUPSclX\/VN7X9nvMvf3E\/fvdtx9NzHtUuufUmFnM\/sys9pCSA8tonmkdwWqggtkD4YI9h5UBBchUiI0EaIYQp7e\/5p9Nu5z5f2ukhZntS035BKHY2elXVKmjaG0jSRttM63F7\/cgPzqfuLddzvu70fGKeMR6KHg40IMM+mwsD8\/A0kqJG25JAIhgtObWKGBUEU0wQWMkL\/\/ze+Jk6En424xziUuFXxr7prCyphaMcwqZIF06bVahdjIQKUBmabM3WHg7m7icBjIQyYIpqUyvFuZvl+4P64sS8W68USkJbs87z3iqnUOFUQVNPUOVEGU\/MPv\/shhdd4vrbcqvVWXC5Cm+NDbjNwV3UJoawa3Fl1piiRVhqGB2U0D45TJWQmgFGM3V+7nwjxXSjXctp73ai+zNZy9ixalEZA2IqIfAyH\/8Ns\/8K53usWe9xsvu9sWYs3yL3d318cXgHqI5KzkIbVOuNOQe7CvRilGra1+uH9xj3jZK1x7SKRvHmQjGEE+\/fz3sF5gPF5+6tnKL5Xk9ZryCpQ0khBtxVO1jW1yRN+keeum42qz9jWRPleud3N91QBknc9xva397ANXyv3iQr+4uHw2v9WFuAD7Jtm+9yVbutk3feY\/\/nXkynIvFfjGn2W+UQm5\/Q\/xjckNyFuTG5C3Jjcgb01uQN6a3IC8NbkBeWvyL5YReIKBxIfNAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTAzLTA3VDE3OjMxOjIzKzA1OjAw3N2M7QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wMy0wN1QxNzozMToyMyswNTowMK2ANFEAAABDdEVYdHNvZnR3YXJlAGZpbGU6Ly8vdXNyL3NoYXJlL2RvYy9pbWFnZW1hZ2ljay02LWNvbW1vbi9odG1sL2luZGV4Lmh0bWwP1+U4AAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn\/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0MDB5WmnbAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE1MDDB\/2DUAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE3MDk4MTI4ODOkFcevAAAAEnRFWHRUaHVtYjo6U2l6ZQA4MzBLQkLpIWXkAAAAIHRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3BocGRxc3RJZsKNujUAAAAASUVORK5CYII="
                //             },
                //             "is_visible": true
                //         },
                //         {
                //             "id": 306896,
                //             "name": "Insta-worthy spots",
                //             "num_places": "19 Places",
                //             "url": "\/bangalore\/picturesque-cafes-insta-worthy",
                //             "image": {
                //                 "url": "https:\/\/b.zmtcdn.com\/data\/collections\/a5e6d123ac773de6d33250da4bb3b93f_1731309686.png",
                //                 "base64": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA\/wD\/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6AsLDDMalgHgcQAAB0FJREFUaN7tmUmPJEkRhT9b3COye7qBM4g79AHN\/\/8PCCHQcGVGzHm6e6qyMtzdjINHLlWzgBASJZSmdNWicHN7YebP7FVJZib\/B6b\/6wDuQO5AXrndgbw2uwN5bXYH8trsDuS1mUfEf82Z\/Ad7\/tXEKvJDzwnwYtb1bTv9bFg\/4uelx\/nA\/Ozr+vNtsJk\/Fnj+BBh5DuKFs5dg\/NPHjy\/eyzVqkXNAZ6c3CJJn++YzggmoCCrz5\/NTkUkkxA2YPAPJfO5u3yt69nHjK897mPv25f\/45uvnL1iuQYkIujtT4Qom8+Ls\/FZUBFOlqFJsflWdGyKhR9IiGWdACJAEkBlE5J6b\/TwzVBUx22PRS4yZSUQSse+LxP\/21V9vX8X87BvVFFPBTDFVVM7skHA+PAMQTIRqxurOm2KsxXFTBKFFcurBUw9OkfSERAiZQY0YjAhGTF9qinnB3DH3CUYVRMlkghhB74MYQWTgf\/7TH1+U0kypqmJuFFPcjeKKq2ICcgESjBGQYKKs7nyxFN4vlS+WwuIGIpx68NgG32+D40i2FEKEFCVI+ui03uljkICa4bVQasVKRd1Rc1CFFEZA74PeB6PHzMhXf\/3LpZwuIGxmYwIwanFqMZZilDOYDMbo+1tJVJSDF96vlV8dVt4fKmtxROCpBZ9PnU\/b4LEnG0qYgRkB9N44bRtba4zMeXatlLrgyxWMmIMYI2D0oLdgjFlN\/s3Xf\/9BJtQU9SuQpTrrUlhrYS1GVUUyiNFpW6f1QFJYzHlcF05vVo6HylodQXjq4wpkQBeHUtBSQITWG09PTzydTrQxQAQrjteKLQtWKlYK6gXUyRTGEGIkmTN2\/+67764McQZhirrgZniZQA5rpa8LY6kMM4wke2c7NbatMwKe1OinE9FObKeFtfheWrOsHvrgKYSwgi8rJRNRpfdOa43tdLpkBdVZUrVMEOesaAExMpVMBRRTm31kApkAJBRNRVMYoQwMJFAT3G0ukck5O2PMixcMmfdFRBkpLD1BhW0Ex9Y59qAxDycCz8RE8J3tmiod6CMYY5B9IL0j3hDfEPW5xEAMwVA11ByPSFDQDEhBSSJjHkYimfTziutSBAlhUs\/OJggthVOChhApSCgtYcPowEDQvVepzKzPSzwv7STQja0PeiSjDQjINkja3gMURRHdgajj1\/4nk6MB0eudOTeQAMbeD\/pIlERHkiFI6vQv03mqgxXSyqTOCFQGKh2NnBXAbJpFFbPZe1x3mldDtg36oGcSI3d63ogxAc9epzsQw3NHMnNwMy6ogOrkb9UJJpPeB1tMxN4TxmyMKpOFzAruBfOClzqbWiYpgxRF+iARZDaECcYLtVSKF8xm30AN2RrbGLQe9GiMU6NtG6N3iGRylKKiuMgMco41er0vOlnLS6G4Y3uHzYTogxEg+7qk2Z1SKrVU6s2+yJyAVFGZzU8BiVm6Ze8byYKVgnhB\/IidGr41nrZGRNAyGa1NQhkDMi8TiHtZZh9RQU0m7Raj1EJdnFoLtRaK+Ux9go1EM\/ek7aXgBa+VZV1Z14VlqZRiqM6StQjUA7NB6wPJnGyjRimFdT0gZpSlY3XBl5VlazydGvV4RBHG1uh6IhAiZlPOzEm\/737xy72+JxBzxatRl8K6FpalstSCm2EIMgJpgfbAUzAx3ByvC3VdWJZ1B+GYzWEzSUZCi2Trg9Y6GUEx53A48ObwhsPbN1itjEwOrfN265xa5+m08fDwQK0VkzkKHd3p24kYcZn1\/Ne\/+e1ea4LsQEox6jJ7x7pUlrqXVkL2gDaQFjM7arPGl5VlXVmWZQehiOQ+GCZjJ4vWg9YHMQauymFdefvuLYe3b\/C6ECJzwBxJG4PT1nh4eOD9u\/e8e\/sFn9695\/jwwLZte3lNPeW\/+\/2HCWSfcs0EL0bdu\/lSC7U4pgqZRA+yDeiB5px4vRRqXViWhbpnb07Kk8pjn3IDoY+cM9WYF31ZKofDynJYsVpBdZZOCiOT1jrH45HPnz7z+eNHvv\/8mePxSNsaMcYcWhP8D19+OYFwHlHmtFtcKcWp+xSrsgMZQY4gx+Q7E8XcKV4opeC+j98kSRCZ+3cQOZlvjt4TiLtRa6XUgrqDzkFzEjz0Mdi2jePjI8eHR47HI9vpRO99xrJLCv\/w4cNFjcneQ1Tm4OimlxH+3G7O8z9x1SGqiplhu4ZQuSq43IHM42QKq6mKkJ0sznvFlDOLIhNIRDJGp22NbdtobaO3TkSQERdBJt9++23eSsrLfXmp9GSXIbuYyhstKTuYMxVeVWnuYvKsBc8q76os9UYJnofXXRRdNFxmEGMwRjBikLug4uIf5PHx8eJVbrr8Gdut\/n6ubq9Q5CxPnyvl56r4Z0yuh92eDnKV5beyNq+\/vPoY54H+pw65De7myduM\/PDBFw\/\/mD1z8O\/\/\/eWn\/lMo9\/8hvjK7A3ltdgfy2uwO5LXZHchrszuQ12Z3IK\/N\/glmBifhb6gZ7gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0xMS0xMVQxMjo1MToyNiswNTowML6bRQoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMTEtMTFUMTI6NTE6MjYrMDU6MDDPxv22AAAAQ3RFWHRzb2Z0d2FyZQBmaWxlOi8vL3Vzci9zaGFyZS9kb2MvaW1hZ2VtYWdpY2stNi1jb21tb24vaHRtbC9pbmRleC5odG1sD9flOAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp\/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANDAweVpp2wAAABh0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxNTAwwf9g1AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNzMxMzA5Njg24ycJ3AAAABJ0RVh0VGh1bWI6OlNpemUAODM0S0JCZkPyswAAACB0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL3RtcC9waHBQQzk1ZlmnDF6WAAAAAElFTkSuQmCC"
                //             },
                //             "is_visible": true
                //         },
                //         {
                //             "id": 225,
                //             "name": "Best luxury dining places",
                //             "num_places": "30 Places",
                //             "url": "\/bangalore\/fine-dining-restaurants",
                //             "image": {
                //                 "url": "https:\/\/b.zmtcdn.com\/data\/collections\/088c7eea7df002b1fef0c1d257935be4_1709812426.png",
                //                 "base64": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA\/wD\/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6AMHERcuKAUxOAAAB4hJREFUaN7tmU2PY0uRhp+I\/DrH1X03c38BgxCD+P+\/BAQrWDDSsARNl+2TmRHBIo+rqpu+wGIkSqMKy7KdzozMNzI+3rAlIoL\/B6L\/7gN8APkA8s7lA8h7kw8g700+gLw3+QDy3iS7+\/+pQhEA+WY0+Feo6ddL5btzgoDv6Mr9OM4JP6H4fCPnJ5FvFb+dLyDyDZgFYpHsvwckp1J52efUJI\/V8rLL94zxAJb\/+te\/rGnx9cHk8TxBiAiir2Mvih4GEkVFUFVEFTkneQThgbvj7kT464EEVJZu1fMV1tpzPBAigjh1cb5\/a8kgyP\/9pz8RLIvFG0RyWjidh0tJSCokfQUSEXicVtNESplcMjllVJUAzJ05jTkHNg0zewEjImhSUkrkpGRdgJKcxlAlECyWHnMn\/Gsg69xO\/v3vf7cO5HEOLtQPEFmVkhM1K6UoOS0wsNZMDwxFUqHUSmsbrTVSzkTAmJOjd47joB8Hc4wFBhBVcsrUkqk10bIuQGkZRVLGRZke9GmMaQtMLGMGEO6YGfm3v\/ntee2G2bp+IlAgi9JyotXMXjNbS9QiZIXAmeYMgxmK5krbLlyenrhcLpRasYCjD663G9frlfvtRj\/u2Jx4LCClFrZWubTCXjOtJGrJ5FLRXDBJHBbc++TeB8OMiHhxXXNnjkH+4x\/+gLlhczLnxKYR7kgEVZWtFC5b4WkrXPZMK0JOQbgxhnNMZ0RCS2O\/fOLzDz\/w6dMnamtYCLej8+X5yvPzF67PXziOG2NM3APRRKmVp73x6VL51JbBWq2U1tCyMSVxn87zMbjeD\/qYOKC6nH\/Oyeh9BbvNyRiD0TtjDNzsBcheC09b5b4XbluiFSGJY9PofXIMZ7iSSmN\/+sTx5Qv3z59prWEIt2Pw5fmZL89fuF6fOe43xhjMCEQStVaul43jqdG3wqVltlap247WnamJ63D+9955vt6594FHnAkF5pz0eyefeQEJB3fCDJ8TicBUMYU5oKsjoYwjICazD\/oxObphp2uN+yD6xG53amsEytEHz\/c719uV2\/3KvR+MOTEPRBSrleSTGoNsBZmFmOvG1IKpmfs0bteD5+uN2\/3APEBP15pGPw7y1hqeV8bIKuQk2MwIUNKKkVozmgQjsGHMMRnHoN8HfRjuQspGWCDmxNFppSLIiqPesX4wx8Gcg+mGB6gmUINpxDAiK66KpcmcRsqGI5gZ5pM5B3105jTiLC9mRj86udVCuFBUGElpJeMRJFVKztScKCqAM0fnmMYxguNwRnfmXJlO3Yg4wAI\/Bj0lCrryvjnYAJtEnMGqShahqFI1UTShJECJUCJefGXVMF5yPubrxvzMWHMMssiZAZIikqGsGlBLpdZKzQmIFTu3K9aNHp0jlEnCH4UP4UxTy71E2FAKghBoOMJ6quq5R2Fvjb1tbG2j1kLKCUkZtIAkRBKqkFIipbQKZ7BC4AwDn5Pce1\/xEQ6xFrRa2fedfd8ppeDu3O53jmmQOq4FT04UhfQo7YFF0N3BJ7ijCIqe1TtQifNQQs6ZrbW1z9OFbd8pJaNJ0aSgmSBBCIKSRCmaKJIYCNOdGBMfgxiTfLvd0fMSsypJV0Fq5ya5FKYZwwMtHS0HWic5BMkL\/KOIYkbMic3BMBjuFFlBvSq2kEXQlKilsG2N\/bKzXS60fSPnvLxHIFDczgLtgTpkhCJKRlYhngZjwpjkPgZKkFRQWbQh5ZUWa2ukXGBOUp7kUiitsVmgKeP2ypsigpiTmAM5EshK444goiQVqgI5EbVQW2NrjdoqpRVyLYvWRBDuhPlyEll1jemoBSmgIEwH88AXfyHnXFCBrEIphbbt7PuFfd9p246mBJqo09jmxCPIuayidgJ5cDU\/byR6R3unjkkJqCcBLCq0rEQrlMvGvm9srVFKWS4luorxSRQJXwzAnWRBDqFKwjUTuaDZyQ6Okv\/jxx9RICWllcLT5cLnz5\/5\/MMPbNsOqvQxSKVSauNyeWKOwZwnpYlXmr44mxFjIH2Q56R5sJ28LUSwJERJ5K1S9kbdGqVVUl4p\/5HlxJdLecDwIGcjp0LJlVYae9uZl46NiZuRf\/afP0eApEotmX3beHp6Yr9cqLURCGMOjt4Zvb+QPjsJ3CKb563AYra2fDdNo0RQA\/LqB1aWy4LkRKqFVPLKVGelxmOBOJXGSUy7O2Maw4w5J9MmPm21Bu7k\/\/rVrxFZ3CWfGau1Rq0ng2UVncXD5gvBdPMzlwfr8aaR8gA3xJzsQQbS2SyFQIggSZD0oOvy2lwRSICclolYQKb7CvCzr\/E4Kf3pCfkXv\/zl2SwJSc\/eIC8rreBbDY27nQv9DMjTlR6We2kfH9ez3EOCs8x90xaKcHZRX3W1Eq8f5VTlESuwz\/3i0Wm+abLkz3\/+n3jbXqquoJOzY4t4tJNvGq9zLN6C+E4TSrweTL4FAj\/Vln89\/AbMI6l8ZyfkdrvGY\/lr3yzfac7jq4VvEfzU7wpvNUh8\/+DxT9Y9Uvs\/2gdAzOy7379V9u\/6b+71Z4d\/Ye7Hf4jvTD6AvDf5APLe5APIe5MPIO9NPoC8N\/kA8t7kb7uNFiWdfa63AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTAzLTA3VDE3OjIzOjQ2KzA2OjAwn0QK3gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wMy0wN1QxNzoyMzo0NiswNjowMO4ZsmIAAABDdEVYdHNvZnR3YXJlAGZpbGU6Ly8vdXNyL3NoYXJlL2RvYy9pbWFnZW1hZ2ljay02LWNvbW1vbi9odG1sL2luZGV4Lmh0bWwP1+U4AAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn\/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0MDB5WmnbAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE1MDDB\/2DUAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE3MDk4MTI0MjYniiLOAAAAEnRFWHRUaHVtYjo6U2l6ZQA3NjlLQkKtnxfLAAAAIHRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3BocFlkZWhrWNT0v2gAAAAASUVORK5CYII="
                //             },
                //             "is_visible": true
                //         },
                //         {
                //             "id": 307108,
                //             "name": "Iconic restaurants",
                //             "num_places": "23 Places",
                //             "url": "\/bangalore\/iconic-restaurants",
                //             "image": {
                //                 "url": "https:\/\/b.zmtcdn.com\/data\/collections\/5188e2b754e6b8cfc7622bb94a798f55_1746185735.png",
                //                 "base64": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA\/wD\/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6QUCEQUiKoXb9wAABuxJREFUaN7tmd2O48gNRg\/rR5Lt7skDZB9gd4Egef8XSZBgN3eZyeUgM7akKpK5qJKsntlJsMlFjMCFVlu21Ko6JIv86BZ3d\/4PRvhfL+AJ8gR58PEEebTxBHm08QR5tPEEebSRzGx\/I8cr8tUnb8cXWvPXKE\/5xWc7\/418TaWUL9b8doKvJ\/Xth8MJfkTxNy9f2EYQEURA+nN9g3C\/n3\/LCN+wb\/r06R\/tgXK83t+L7Nfarw3Cm0fc8T55+6jhtIV01MOqRIQQAjFGQgiEIO1+c8xsP9x\/AWYD39f51rjp7x8+EESQILvFtklF2mQi4c7hhls7cGuLcMPMsQ1sh2rvcd8hUkrkIZNzJsaIO6gqtVZKKagqqhuM7wDSPUn35t2fHeSvP\/9ECG2S0G9sIOFgvfa5mzcIVcwqroqbodYmr+YdqC\/EDHfbDZNSYhwHTtPENE2knHF31lJZloVlWVjXQq11hxG5G1VCaOdB3mCAk\/78pz8S42HByB7HMcY9DEBwM0wrViuuFTfFVammlGqUbk3dvOXtFYcQAjknTqcTLy9nzuczeRgxd5alcL3duF2vzPPCuq7Uqh2kGzkEQtxgwm7wHr+kn3\/6y77gGMN9f9D+MMZIEMEdTLVBdBBcMWsLX1UpVSna4lxcwQ1xQwRiCAxD5nw68fJy4Xy5kIYBc5iXlc+fb1yvV27XG8uyUGrFzQkifR2JECMS4x5inQF3J314\/7e3lt9Cq8fl5iU3Q2vFSoMQM8BAQB2qGUWNqoq7ETAiTsQIAjEIOWeWaWT5dObTaSKkgerCshZut6WB3G4s80ItBfcGEmMkpkRMCYkRJOCbcb2Fc\/r48WN32z2Ejml1S5CmhpYWVqgieEsEMUAIGA3IzBCcJA5iiDiC4wHMVlZf8bow3wY8JKoLRZ1lLSzzwjzPrMvXICklQkpITPt8ZqA9ItKnz9cdpKVb9pwOTvcHpoZVxVTBDAFiisSciDkTUuxZKRIFUnCyGAkjuiHdM2JKLQtrrSiR6oHqoOpU05b5tuy55+Ce1rdzc5QGUdWpqqTrbd43k4S+gaylvgAtRoM0J5lhqi12e8jFmEjDwDCO5JxIMZCCkMRJKNErYhVMcVPUnWpOVWM1pxJwAoZAiMScQQIxtRAVuEfM5o2teDq4GI6QbstK3EBkLxbQ3ZpjIMW0p2BiRAJIjKRxYDyduLycOZ9PTOPIkCM5SNsbrogWvK5YLagWSlXmatTqoIAHXAJBAgFIebjXEPeDGmgh7EA1byVAlIAiLqSyrmiIxNALDq3oibcNKp6aRUhIbJOJBFJODeL1wrt3L7y+XDhPE2NOpAARa57QgtUVLSu1VuZSCUWhOFRnNTCXvT6EXoRDCHul2ALMHFRbml9LRUpFYkWiktzapnQPe07eZIV7ywyO4IeEEGNinEYulzOvr6+8e33l3euF82nsIAePuIJWtG7eUK7FGIoxF2OphlqPgHDf2Pcs2gLEzNGe4te1sKwr67pSSqXUSsop9dBqVvGDPoohEFMixHbEnIkpMQyZ02ni8nJpx+XM6XRimkbGHMkxkCPkAFlApG3QVY25GtdqXIpxK8ZaKqVUzHqajnGXMCHGlmr8CLGyzEvLcMtCKU0JpN+8e71v9g5iHSRIA8k5k\/qRh4FxHDifJl4u517czkzTxDBmckqMOTDlyJQT0xBJMYAEijlzda7VmYsxl9pBClrrngnzMOwgIoK5o1UppaXo2+3GfLsxzzNlLS1rfffb75o3Ooj1WNz01laMUm5WykPe9dL5NHE5TZymkXHI5JwYUmTMkdOYOU8D5zEzDBlCpLowV+dcW0itVVlLoZaK1gp4C60hk\/JAjLHvjQ6yrizz3ECu17cg3\/\/wA0F66u0gvtXDTXanROpHzm1h45AZh4FxyAw5kVIkxWb9Id1BTtPAMGQkJKrDos5avUsa25WvmTZNFptCjinvSsPcMVXKWliXuXnjdmNdFkqpqCrpd7\/\/w97otNIHe8+4S\/nNM32xKZHT\/XXbY6GD5xQYcmLqwCklJAQU4aTepIw5euxBzPYoaDWjCcRtt5tZk\/rrSlkW1nXbH03vpe9\/\/PFNH+IcO7t7H7Ar0H7ETfp3gCbk2GFSDA12E6PSaoAa6KF3sUODthmv9UcHhbvd2\/VerS0UVbUbwpEP79\/7sX08Qhw7u7fHvXsU6Z47dAebGgi9LsgmPA9q9Zgdjx3l\/qz9mfKmA7Xe2G1e3Bo5ud2u\/uXCvzVkb7ru9\/9SD31sSbe\/adrpqJz4up092PDLdta\/aLPvPX67Kqr6H313IfLvwb\/27a\/7tuVfDn\/zdQfy\/B\/ig40nyKONJ8ijjSfIo40nyKONJ8ijjSfIo41\/Av1Vs3zBkK6iAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA1LTAyVDE3OjA1OjM0KzA2OjAwp8FprQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNS0wMlQxNzowNTozNCswNjowMNac0REAAABDdEVYdHNvZnR3YXJlAGZpbGU6Ly8vdXNyL3NoYXJlL2RvYy9pbWFnZW1hZ2ljay02LWNvbW1vbi9odG1sL2luZGV4Lmh0bWwP1+U4AAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn\/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0MDB5WmnbAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE1MDDB\/2DUAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE3NDYxODU3MzQXE7npAAAAEnRFWHRUaHVtYjo6U2l6ZQAzNThLQkLJEkhoAAAAIHRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3BocDVaeHp2UPm1atwAAAAASUVORK5CYII="
                //             },
                //             "is_visible": true
                //         },
                //         {
                //             "id": 20,
                //             "name": "Top breakfast spots",
                //             "num_places": "26 Places",
                //             "url": "\/bangalore\/great-breakfasts",
                //             "image": {
                //                 "url": "https:\/\/b.zmtcdn.com\/data\/collections\/f123375fee94c32136696c2af1e25a28_1709812029.png",
                //                 "base64": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA\/wD\/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6AMHEREJ21Uj1QAAB3VJREFUaN7tmeuS3LgNhT8AlPoyduLN+z9hsjfveqYlEpf8oLpt73pzqUolU6lBFYvTGonEIUjgHEmqqvg\/MP1fO\/AG5A3IK7c3IK\/N3oC8NnsD8trsDchrs\/Z7zvgtDil\/OMA\/45zCf8DkWyPVVze0iPjCmXp0cv9b5OjkMVjd76yijnag+mpyQe6P\/1NAnx+tzz7KnF8OP0S+\/VwBbds2qvK4crhY9ZhYBEQUREEnmAKyIDPJSLKSyvzKCRFQEVQFlQNIfeHowyl5ePRYlPstAqgiOseZYx6PHPdkQZbQfvnlI5UxHcmASqhEqh7OiBqiBmqUGgV4Fu6BuxPuZMRjQeb8QlOlmdJUUAoqqayvN+99mbPInAuSmY\/\/qSnaDFuUZoLaBFMFURApRArthx++J3xQ3il3JAdkoA8gipoh1sAWyhqB4Vl0d\/Y+GH0nxqAyIBORoqmyLsapNVYTjII4AN\/BzHDPBc4kPL5YFEAFXRptbaxnY12VZQHTogpGCD2U7kr7\/m9\/xftG9o3qG\/iOhCOVc0scQLAGtoKthC04yu7J1jt93\/C+kz6QDJSimXJeFy6nxtkUy6BGJ3qfjlJzu4ogIlQmPhzvHR9OZIIqthrrZeHytHC9KqeT0LTIgu7CrRu3YbSPH3\/Eb8\/49kxtz1TfkJgOySP0AmKULdBO1Hom2omB0kfQ+473jRodYnwGclro68Jmgnkntxu+3Ygx5rkSRWSegQlkMPZO74PIoESwxThdG0\/vF96\/N64XYbEiErYufNqMT7vR9u3GePmEP38kb79CvyHeIZOqIrOInH2pIcsZPT8hl\/fkeiYQ0v3YmhvEIDMIU0Y1tlhIKXTsxPOvc659n1ERAbUJpCB80Ptg9M7wGTVdhNO1EXuDbtQVFivci+cNPr4oH1+MVulUdGpsVH9B+guEzyyShY+gj4GPoABbTzTvNJk7w9qKGtQiVAk5cwlCQkJ40Sup\/UbcXhgvz8R2IyNm9lFDVCkgIhjjAONOVKIDMo2mxqKKeTE06D359aX4+ZPw47PSpHLu63KkHCVQTaTAq0gSTQfvM+dpIXFCs2M4Io0SwCCtyEiCeaCjigynIqh9w7ed3Hey70jFPB9qIEICEclwZ8RskUdZsKBtymIgnmg5fXc+Pic\/\/Qo\/PSuNDKRmU5Km0EQRhGYgVeCKNCELzKBZ0STRCiqP6HmnvBNjnwc2kiiZKdKD2Ddqu1FbRyNo5KwNR3mJI513d\/YRjAiiakZVAZs1rm+ORGffJpCfn+HjTWmkM8EkqmCiLCqoKJkgJY+UmlXIsmLNEOFIlUVEEH3H9xt9u9H7Th\/OiKLHdDBHh7Fj0VkIVhMWQCvILIYH+\/DZPBmRJII0pQu4QPdklaA82Lfg0y35ZROeO0dEyKMKK0ZDVTBRELBWWFtoVQRQbSHFCA88NkbUPJzbRt9u7NuNbd\/Zu7N7MDxxDyocq2CR5GTCaVHWNqt+RNC7s\/XBNoLuM5plhpaxquKi9ADLJN3oe\/KywfMQ9lCaqkBr1LqiEiiOCFQJRZEK1YosIWCCCGGE02NMh7eN\/baxbTe2beO2dfY+6O4HiMRImsBqgq\/GSGMJRZgR28cxlieRk5qYNRZbKVupZoQUwSBY6HSGBmWzaDdbz5M+qCC+oDkedCEk8DQ8jVHOyMILhkMPn6u4d7bbNgHcNm7bzt4H+xi4B0RgFbO4GiBGhjIU\/OBKHtBdGWkEhpiyLAun85nz9cL5cmE9LagIFTM9696R7jRPoqAtl3ewrHA6I77P1BtOupPDSXVCBqHO8GB40MMZMegBI8FLcYzQhTSopiiNpo5VspKctTiZsDRDWiPNCLFZqzRBk7YWqwhra5xPJ56erlyfnjg\/PbGeT6gqmYH3Tt93+t7n+cuknZ\/+DOlITgAVTsZAhlN9EH3Q9tnHGGQftN6hdWiOLANdHRvOMpzTCCKCPHhXq+AkyUUmEDOlzBhidPRYiMl6VYTFlMu68HQ583S9cn33xPnpHev5gjQ7GEBn7H1yvIObtXd\/+jCJ+cF6K4KMyWpHH6xH62PQe8fHmM3HTKsReOSjxcEIKhOtpDEjctJiEeaqijJE6SWMmttLRDAVTs24rAvX88r1cuF8vbJen2inM9pmBMOd6B0fnQinImnfffjL16rnoNFxBzMcH87wcVD2IA8Wmzm1SGYd+qQmGbxrkkqMopEsUphMhxPBEfxIIHUIsKbKasppaZzWhdNpZTmdaacztiyIGVSRGeQhH+4SpH348N1nFXZXf5UP0RQRROR8OOb1OoTUFEJQ1EOpfSmXhEKqUAqTOl4QCCUQNat5HtdEwEQO\/aK0ZrTWsNbQtqDWDlU1Kf9s8RBj7d2794e2+RyW6djkWlWzEN4dpz6v+uf+9ya\/BfTF7\/pNuwMRmXXlXtNUFbm3g\/LfJ7yLuDpUp4zR67eK+q7HZ\/d1\/4D6L3znkj\/4XX9ws3wJ6rggh\/j65suHL3S+ZOY\/dOm\/+WXuaxn\/771\/kbdviK\/M3oC8NnsD8trsDchrszcgr83egLw2ewPy2uzv29kjzU4RZZUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDMtMDdUMTc6MTc6MDkrMDY6MDB9T7K2AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTAzLTA3VDE3OjE3OjA5KzA2OjAwDBIKCgAAAEN0RVh0c29mdHdhcmUAZmlsZTovLy91c3Ivc2hhcmUvZG9jL2ltYWdlbWFnaWNrLTYtY29tbW9uL2h0bWwvaW5kZXguaHRtbA\/X5TgAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf\/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADQwMHlaadsAAAAYdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTUwMMH\/YNQAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc\/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTcwOTgxMjAyObA8l4MAAAASdEVYdFRodW1iOjpTaXplADMyM0tCQqwzE3kAAAAgdEVYdFRodW1iOjpVUkkAZmlsZTovLy90bXAvcGhwYkdLMllo1kcKZAAAAABJRU5ErkJggg=="
                //             },
                //             "is_visible": true
                //         }
                //     ],
                //     "type": "COLLECTION_RAIL"
                // },
                {
                    "type": "restaurant",
                    "info": {
                        "resId": 20872136,
                        "name": "Sector 144",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20872136\/22a896dcd9612f493ee0e9558883eec3_featured_v2.jpg",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20872136\/22a896dcd9612f493ee0e9558883eec3_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20872136\/a54fd329a5a9ef3b047b4465467c8778_o2_featured_v2.jpg"
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "4.2",
                            "rating_text": "4.2",
                            "rating_subtitle": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "2,371",
                            "subtext": "REVIEWS",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "4.4",
                                    "reviewCount": "2,348",
                                    "reviewTextSmall": "2,348 Reviews",
                                    "subtext": "2,348 Dining Reviews",
                                    "color": "#1C1C1C",
                                    "ratingV2": "4.4",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "4.0",
                                    "reviewCount": "23",
                                    "reviewTextSmall": "23 Reviews",
                                    "subtext": "23 Delivery Reviews",
                                    "color": "#E23744",
                                    "ratingV2": "4.0",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b92,000 for two"
                        },
                        "cfo": {
                            "text": "\u20b9800 for one"
                        },
                        "locality": {
                            "name": "Electronic City, Bangalore",
                            "address": "4\/152\/4, Rebus Realm 2, Neeladri Nagar Road, Electronic City, Bangalore",
                            "localityUrl": "bangalore\/electronic-city-restaurants"
                        },
                        "timing": {
                            "text": "Closes in 57 minutes",
                            "color": "#e5521f"
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQ4XCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/indian\/",
                                "name": "Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/oriental\/",
                                "name": "Oriental"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                                "name": "Continental"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                                "name": "Pizza"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                                "name": "Desserts"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b92,000 for two"
                        }
                    },
                    "order": [],
                    "gold": [],
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/sector-144-electronic-city-bangalore\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "3.8 km",
                    "isPromoted": true,
                    "promotedText": "Promoted",
                    "trackingData": [
                        {
                            "table_name": "jadtracking",
                            "payload": "{\"banner_id\":\"9584670\",\"bzone\":\"0\",\"campaign_id\":\"18561567\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20872136\",\"isNewAd\":\"34\",\"ad_position\":\"1\",\"slider_position\":\"1\",\"slider_sequence\":\"1\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.039948\\\",\\\"cost_for_two_ctr\\\":\\\"0.111042\\\",\\\"distance\\\":\\\"3.545307159423828\\\",\\\"organic_ctr\\\":\\\"0.083986\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"331\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.45194442682230535\\\",\\\"cost_for_two_ctr\\\":\\\"1\\\",\\\"cost_per_unit\\\":\\\"1\\\",\\\"distance\\\":\\\"0.2831804878401898\\\",\\\"organic_ctr\\\":\\\"1\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0\\\"},\\\"section_name\\\":\\\"featured\\\",\\\"type\\\":\\\"boost\\\",\\\"subzone_id\\\":5010,\\\"total_score\\\":0.5566360984119816,\\\"original_rank\\\":11,\\\"boosted_rank\\\":1}\",\"subzone_id\":\"5010\",\"flink_display_page\":\"dineout_home\"}",
                            "event_names": {
                                "tap": "{\"action\":\"click\"}",
                                "impression": "{\"action\":\"impression\"}",
                                "served": "{\"action\":\"serve\"}"
                            }
                        }
                    ],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                },
                {
                    "type": "restaurant",
                    "info": {
                        "resId": 19275149,
                        "name": "BLR Brewing Co.",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/19275149\/a6b4cc9e5e148eada678205ac28c2587_featured_v2.jpg",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/19275149\/a6b4cc9e5e148eada678205ac28c2587_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/19275149\/0653e41c2467b3d4362482816e283d36_o2_featured_v2.jpg"
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "4.4",
                            "rating_text": "4.4",
                            "rating_subtitle": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "15.3K",
                            "subtext": "REVIEWS",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "4.5",
                                    "reviewCount": "11.4K",
                                    "reviewTextSmall": "11.4K Reviews",
                                    "subtext": "11.4K Dining Reviews",
                                    "color": "#1C1C1C",
                                    "ratingV2": "4.5",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "800"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "4.2",
                                    "reviewCount": "3,908",
                                    "reviewTextSmall": "3,908 Reviews",
                                    "subtext": "3,908 Delivery Reviews",
                                    "color": "#E23744",
                                    "ratingV2": "4.2",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b91,600 for two"
                        },
                        "cfo": {
                            "text": "\u20b9650 for one"
                        },
                        "locality": {
                            "name": "Electronic City, Bangalore",
                            "address": "84\/4, 4Th Floor, Phase 1, Opposite To Wipro Gate, Neeladri Road, Electronic City, Bangalore",
                            "localityUrl": "bangalore\/electronic-city-restaurants"
                        },
                        "timing": {
                            "text": "Closes in 1 hour 58 minutes",
                            "color": "#e5521f"
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                                "name": "North Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                                "name": "Asian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                                "name": "Continental"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                                "name": "Chinese"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                                "name": "Pizza"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b91,600 for two"
                        }
                    },
                    "order": [],
                    "gold": [],
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/blr-brewing-co-electronic-city-bangalore\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "3.1 km",
                    "isPromoted": true,
                    "promotedText": "Promoted",
                    "trackingData": [
                        {
                            "table_name": "jadtracking",
                            "payload": "{\"banner_id\":\"9578002\",\"bzone\":\"0\",\"campaign_id\":\"18585498\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"19275149\",\"isNewAd\":\"34\",\"ad_position\":\"2\",\"slider_position\":\"2\",\"slider_sequence\":\"2\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.057226\\\",\\\"cost_for_two_ctr\\\":\\\"0.091878\\\",\\\"distance\\\":\\\"2.8836119174957275\\\",\\\"organic_ctr\\\":\\\"0.046859\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"1561\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"1\\\",\\\"cost_for_two_ctr\\\":\\\"0.8274166531582644\\\",\\\"cost_per_unit\\\":\\\"0.8612304696567118\\\",\\\"distance\\\":\\\"0.5786288903903695\\\",\\\"organic_ctr\\\":\\\"0.5579382277998713\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.814030443414957\\\"},\\\"section_name\\\":\\\"featured\\\",\\\"type\\\":\\\"boost\\\",\\\"subzone_id\\\":5010,\\\"total_score\\\":0.5345061790579677,\\\"original_rank\\\":7,\\\"boosted_rank\\\":2}\",\"subzone_id\":\"5010\",\"flink_display_page\":\"dineout_home\"}",
                            "event_names": {
                                "tap": "{\"action\":\"click\"}",
                                "impression": "{\"action\":\"impression\"}",
                                "served": "{\"action\":\"serve\"}"
                            }
                        }
                    ],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                },
                {
                    "type": "restaurant",
                    "info": {
                        "resId": 22151933,
                        "name": "Club Destini - Destini Bar & Kitchen",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/22151933\/357a77913850c3d053b9db16912facf0_o2_featured_v2.jpg",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/22151933\/357a77913850c3d053b9db16912facf0_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/22151933\/357a77913850c3d053b9db16912facf0_o2_featured_v2.jpg"
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "3.8",
                            "rating_text": "3.8",
                            "rating_subtitle": "Good",
                            "rating_color": "9ACD32",
                            "votes": "1,287",
                            "subtext": "REVIEW",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "4.2",
                                    "reviewCount": "1,257",
                                    "reviewTextSmall": "1,257 Reviews",
                                    "subtext": "1,257 Dining Reviews",
                                    "color": "#1C1C1C",
                                    "ratingV2": "4.2",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "3.4",
                                    "reviewCount": "30",
                                    "reviewTextSmall": "30 Reviews",
                                    "subtext": "30 Delivery Reviews",
                                    "color": "#E23744",
                                    "ratingV2": "3.4",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "yellow",
                                        "tint": "400"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b92,000 for two"
                        },
                        "cfo": {
                            "text": "\u20b9800 for one"
                        },
                        "locality": {
                            "name": "Electronic City, Bangalore",
                            "address": "Plot 1, 3rd Floor, M5 E City Mall, Veerasandra Industrial Area, Hosur Road, Near Audi Showroom, Electronic City, Bangalore",
                            "localityUrl": "bangalore\/electronic-city-restaurants"
                        },
                        "timing": {
                            "text": "Closes in 43 minutes",
                            "color": "#e5521f"
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bar-food\/",
                                "name": "Bar Food"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/modern-indian\/",
                                "name": "Modern Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mexican\/",
                                "name": "Mexican"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sea-food\/",
                                "name": "Seafood"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b92,000 for two"
                        }
                    },
                    "order": [],
                    "gold": {
                        "instant": 10,
                        "welcome_offer": false,
                        "gold_offer": false,
                        "text": "Flat",
                        "offerValue": "10% OFF",
                        "isGoldIcon": false
                    },
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/club-destini-destini-bar-kitchen-electronic-city-bangalore\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "2.1 km",
                    "isPromoted": true,
                    "promotedText": "Promoted",
                    "trackingData": [
                        {
                            "table_name": "jadtracking",
                            "payload": "{\"banner_id\":\"9621851\",\"bzone\":\"0\",\"campaign_id\":\"18599083\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"22151933\",\"isNewAd\":\"34\",\"ad_position\":\"3\",\"slider_position\":\"3\",\"slider_sequence\":\"3\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.036353\\\",\\\"cost_for_two_ctr\\\":\\\"0\\\",\\\"distance\\\":\\\"1.9398963451385498\\\",\\\"organic_ctr\\\":\\\"0.01569\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"340\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.33791156505741304\\\",\\\"cost_for_two_ctr\\\":\\\"0\\\",\\\"cost_per_unit\\\":\\\"0.12677203777309143\\\",\\\"distance\\\":\\\"1\\\",\\\"organic_ctr\\\":\\\"0.18681685042745216\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.005956320317670417\\\"},\\\"section_name\\\":\\\"featured\\\",\\\"type\\\":\\\"boost\\\",\\\"subzone_id\\\":5010,\\\"total_score\\\":0.3372848551578008,\\\"original_rank\\\":20,\\\"boosted_rank\\\":3}\",\"subzone_id\":\"5010\",\"flink_display_page\":\"dineout_home\"}",
                            "event_names": {
                                "tap": "{\"action\":\"click\"}",
                                "impression": "{\"action\":\"impression\"}",
                                "served": "{\"action\":\"serve\"}"
                            }
                        }
                    ],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                },
                {
                    "type": "restaurant",
                    "info": {
                        "resId": 22385804,
                        "name": "BREW MILL",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/images\/res_avatar_476_320_1x_new.png",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/images\/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": false
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "4.5",
                            "rating_text": "4.5",
                            "rating_subtitle": "Excellent",
                            "rating_color": "3F7E00",
                            "votes": "587",
                            "subtext": "REVIEWS",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "4.5",
                                    "reviewCount": "587",
                                    "reviewTextSmall": "587 Reviews",
                                    "subtext": "587 Dining Reviews",
                                    "color": "#1C1C1C",
                                    "ratingV2": "4.5",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "800"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "",
                                    "reviewCount": "0",
                                    "reviewTextSmall": "0 Reviews",
                                    "subtext": "Does not offer Delivery",
                                    "color": "",
                                    "ratingV2": "-",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "100"
                                    },
                                    "textColorV2": {
                                        "type": "green",
                                        "tint": "500"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b91,500 for two"
                        },
                        "cfo": {
                            "text": "\u20b9600 for one"
                        },
                        "locality": {
                            "name": "Electronic City, Bangalore",
                            "address": "Picasso City, North Entrance Road, Neeladri Nagar, Electronic City, Bangalore",
                            "localityUrl": "bangalore\/electronic-city-restaurants"
                        },
                        "timing": {
                            "text": "Closes in 57 minutes",
                            "color": "#e5521f"
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                                "name": "North Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                                "name": "Chinese"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                                "name": "South Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                                "name": "Pizza"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/biryani\/",
                                "name": "Biryani"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/burger\/",
                                "name": "Burger"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                                "name": "Desserts"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/momos\/",
                                "name": "Momos"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b91,500 for two"
                        }
                    },
                    "order": [],
                    "gold": {
                        "instant": 10,
                        "welcome_offer": false,
                        "gold_offer": false,
                        "text": "Flat",
                        "offerValue": "10% OFF",
                        "isGoldIcon": false
                    },
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/brew-mill-1-electronic-city-bangalore\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "4.2 km",
                    "isPromoted": true,
                    "promotedText": "Promoted",
                    "trackingData": [
                        {
                            "table_name": "jadtracking",
                            "payload": "{\"banner_id\":\"9579775\",\"bzone\":\"0\",\"campaign_id\":\"18556660\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"22385804\",\"isNewAd\":\"34\",\"ad_position\":\"4\",\"slider_position\":\"4\",\"slider_sequence\":\"4\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.050198\\\",\\\"cost_for_two_ctr\\\":\\\"0\\\",\\\"distance\\\":\\\"3.960344076156616\\\",\\\"organic_ctr\\\":\\\"0.011183\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"1842\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7770728922159488\\\",\\\"cost_for_two_ctr\\\":\\\"0\\\",\\\"cost_per_unit\\\":\\\"0.29531162905658537\\\",\\\"distance\\\":\\\"0.09786557807788228\\\",\\\"organic_ctr\\\":\\\"0.13315314457171432\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"1\\\"},\\\"section_name\\\":\\\"featured\\\",\\\"type\\\":\\\"boost\\\",\\\"subzone_id\\\":5010,\\\"total_score\\\":0.33584536966978756,\\\"original_rank\\\":8,\\\"boosted_rank\\\":4}\",\"subzone_id\":\"5010\",\"flink_display_page\":\"dineout_home\"}",
                            "event_names": {
                                "tap": "{\"action\":\"click\"}",
                                "impression": "{\"action\":\"impression\"}",
                                "served": "{\"action\":\"serve\"}"
                            }
                        }
                    ],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                },
                {
                    "type": "restaurant",
                    "info": {
                        "resId": 20123043,
                        "name": "Shift Lounge & Bar",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20123043\/1237d0d15387578cba93dbebf53a659a_featured_v2.jpg",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20123043\/1237d0d15387578cba93dbebf53a659a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": false
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "4.3",
                            "rating_text": "4.3",
                            "rating_subtitle": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "2,348",
                            "subtext": "REVIEWS",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "4.3",
                                    "reviewCount": "2,348",
                                    "reviewTextSmall": "2,348 Reviews",
                                    "subtext": "2,348 Dining Reviews",
                                    "color": "#1C1C1C",
                                    "ratingV2": "4.3",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "",
                                    "reviewCount": "0",
                                    "reviewTextSmall": "0 Reviews",
                                    "subtext": "Does not offer Delivery",
                                    "color": "",
                                    "ratingV2": "-",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "100"
                                    },
                                    "textColorV2": {
                                        "type": "green",
                                        "tint": "500"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b91,200 for two"
                        },
                        "cfo": {
                            "text": "\u20b9500 for one"
                        },
                        "locality": {
                            "name": "Pragathi Nagar, Bangalore",
                            "address": "676, 5\/2, 5Th Floor, Near Ramee Strand, Hosur Road, Pragathi Nagar, Bangalore",
                            "localityUrl": "bangalore\/pragathi-nagar-restaurants"
                        },
                        "timing": {
                            "text": "Closes in 28 minutes",
                            "color": "#ab000d"
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                                "name": "Continental"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bar-food\/",
                                "name": "Bar Food"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                                "name": "North Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA4MlwiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/alcoholic-beverages\/",
                                "name": "Alcoholic Beverages"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                                "name": "Chinese"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mughlai\/",
                                "name": "Mughlai"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                                "name": "Desserts"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                                "name": "Beverages"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b91,200 for two"
                        }
                    },
                    "order": [],
                    "gold": {
                        "instant": 25,
                        "welcome_offer": false,
                        "gold_offer": false,
                        "text": "Flat",
                        "offerValue": "25% OFF",
                        "isGoldIcon": false
                    },
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/shift-lounge-bar-pragathi-nagar-bangalore\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "3.5 km",
                    "isPromoted": true,
                    "promotedText": "Promoted",
                    "trackingData": [
                        {
                            "table_name": "jadtracking",
                            "payload": "{\"banner_id\":\"9606870\",\"bzone\":\"0\",\"campaign_id\":\"18583947\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20123043\",\"isNewAd\":\"34\",\"ad_position\":\"5\",\"slider_position\":\"5\",\"slider_sequence\":\"5\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.045693\\\",\\\"cost_for_two_ctr\\\":\\\"0.035877\\\",\\\"distance\\\":\\\"3.5389649868011475\\\",\\\"organic_ctr\\\":\\\"0.028705\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"876\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.6341749666941572\\\",\\\"cost_for_two_ctr\\\":\\\"0.32309396444588534\\\",\\\"cost_per_unit\\\":\\\"0.10949573290821621\\\",\\\"distance\\\":\\\"0.2860122820731489\\\",\\\"organic_ctr\\\":\\\"0.34178315433524636\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.36068828590337526\\\"},\\\"section_name\\\":\\\"featured\\\",\\\"type\\\":\\\"boost\\\",\\\"subzone_id\\\":5010,\\\"total_score\\\":0.18670970348616045,\\\"original_rank\\\":21,\\\"boosted_rank\\\":5}\",\"subzone_id\":\"5010\",\"flink_display_page\":\"dineout_home\"}",
                            "event_names": {
                                "tap": "{\"action\":\"click\"}",
                                "impression": "{\"action\":\"impression\"}",
                                "served": "{\"action\":\"serve\"}"
                            }
                        }
                    ],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                },
                {
                    "type": "restaurant",
                    "info": {
                        "resId": 20707544,
                        "name": "Macaw By Stories",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20707544\/cca41bc2179e9056c884b03dc6bf6318_featured_v2.jpg",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20707544\/cca41bc2179e9056c884b03dc6bf6318_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20707544\/5ef533286db8ec4ab14027e70c3ae099_o2_featured_v2.jpg"
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "4.3",
                            "rating_text": "4.3",
                            "rating_subtitle": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "13.2K",
                            "subtext": "REVIEWS",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "4.5",
                                    "reviewCount": "12.8K",
                                    "reviewTextSmall": "12.8K Reviews",
                                    "subtext": "12.8K Dining Reviews",
                                    "color": "#1C1C1C",
                                    "ratingV2": "4.5",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "800"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "4.0",
                                    "reviewCount": "438",
                                    "reviewTextSmall": "438 Reviews",
                                    "subtext": "438 Delivery Reviews",
                                    "color": "#E23744",
                                    "ratingV2": "4.0",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b92,000 for two"
                        },
                        "cfo": {
                            "text": "\u20b9800 for one"
                        },
                        "locality": {
                            "name": "Bommanahalli, Bangalore",
                            "address": "2224, 2225, AECS Layout, Near Singasandra, Hosur Main Road, Bommanahalli, Bangalore",
                            "localityUrl": "bangalore\/bommanahalli-restaurants"
                        },
                        "timing": {
                            "text": "Closes in 1 hour 58 minutes",
                            "color": "#e5521f"
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                                "name": "South Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                                "name": "North Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                                "name": "Chinese"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pasta\/",
                                "name": "Pasta"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                                "name": "Pizza"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                                "name": "Fast Food"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/salad\/",
                                "name": "Salad"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                                "name": "Desserts"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b92,000 for two"
                        }
                    },
                    "order": [],
                    "gold": {
                        "instant": 15,
                        "welcome_offer": false,
                        "gold_offer": false,
                        "text": "Flat",
                        "offerValue": "15% OFF",
                        "isGoldIcon": false
                    },
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/macaw-by-stories-bommanahalli-bangalore\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "4.1 km",
                    "isPromoted": true,
                    "promotedText": "Promoted",
                    "trackingData": [
                        {
                            "table_name": "jadtracking",
                            "payload": "{\"banner_id\":\"9613168\",\"bzone\":\"0\",\"campaign_id\":\"18590293\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20707544\",\"isNewAd\":\"34\",\"ad_position\":\"6\",\"slider_position\":\"6\",\"slider_sequence\":\"6\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.034076\\\",\\\"cost_for_two_ctr\\\":\\\"0.044373\\\",\\\"distance\\\":\\\"4.1795268058776855\\\",\\\"organic_ctr\\\":\\\"0.037758\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"742\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.2656854659646007\\\",\\\"cost_for_two_ctr\\\":\\\"0.3996055546549954\\\",\\\"cost_per_unit\\\":\\\"0.22432315384476345\\\",\\\"distance\\\":\\\"0\\\",\\\"organic_ctr\\\":\\\"0.44957492915485914\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.27200529450694905\\\"},\\\"section_name\\\":\\\"featured\\\",\\\"type\\\":\\\"boost\\\",\\\"subzone_id\\\":5010,\\\"total_score\\\":0.1735104161611984,\\\"original_rank\\\":6,\\\"boosted_rank\\\":6}\",\"subzone_id\":\"5010\",\"flink_display_page\":\"dineout_home\"}",
                            "event_names": {
                                "tap": "{\"action\":\"click\"}",
                                "impression": "{\"action\":\"impression\"}",
                                "served": "{\"action\":\"serve\"}"
                            }
                        }
                    ],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                },
                {
                    "type": "restaurant",
                    "info": {
                        "resId": 18359909,
                        "name": "The Rasoiya Street",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/18359909\/8ef75165048f381d73f8190ea4b06d76_featured_v2.jpg",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/18359909\/8ef75165048f381d73f8190ea4b06d76_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/18359909\/c55f71e4ec994bae629c2be8e9338479_o2_featured_v2.jpg"
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "4.2",
                            "rating_text": "4.2",
                            "rating_subtitle": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "13.1K",
                            "subtext": "REVIEWS",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "4.2",
                                    "reviewCount": "2,839",
                                    "reviewTextSmall": "2,839 Reviews",
                                    "subtext": "2,839 Dining Reviews",
                                    "color": "#1C1C1C",
                                    "ratingV2": "4.2",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "4.1",
                                    "reviewCount": "10.3K",
                                    "reviewTextSmall": "10.3K Reviews",
                                    "subtext": "10.3K Delivery Reviews",
                                    "color": "#E23744",
                                    "ratingV2": "4.1",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b91,100 for two"
                        },
                        "cfo": {
                            "text": "\u20b9450 for one"
                        },
                        "locality": {
                            "name": "Electronic City, Bangalore",
                            "address": "Florus, 3rd Floor, Neeladri Road, Near Apollo Clinic, Electronic City, Bangalore",
                            "localityUrl": "bangalore\/electronic-city-restaurants"
                        },
                        "timing": {
                            "text": "Opens tomorrow at 11am",
                            "color": "#ab000d"
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                                "name": "North Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                                "name": "Continental"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                                "name": "Asian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                                "name": "Chinese"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                                "name": "Desserts"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                                "name": "Beverages"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b91,100 for two"
                        }
                    },
                    "order": [],
                    "gold": [],
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/the-rasoiya-street-electronic-city\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "3.6 km",
                    "isPromoted": true,
                    "promotedText": "Promoted",
                    "trackingData": [
                        {
                            "table_name": "jadtracking",
                            "payload": "{\"banner_id\":\"9540201\",\"bzone\":\"0\",\"campaign_id\":\"18517006\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18359909\",\"isNewAd\":\"34\",\"ad_position\":\"7\",\"slider_position\":\"7\",\"slider_sequence\":\"7\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.0257\\\",\\\"cost_for_two_ctr\\\":\\\"0.028147\\\",\\\"distance\\\":\\\"3.3311750888824463\\\",\\\"organic_ctr\\\":\\\"0.021891\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"502\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0\\\",\\\"cost_for_two_ctr\\\":\\\"0.25348066497361355\\\",\\\"cost_per_unit\\\":\\\"0\\\",\\\"distance\\\":\\\"0.3787909353203123\\\",\\\"organic_ctr\\\":\\\"0.2606505846212464\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.11317008603573792\\\"},\\\"section_name\\\":\\\"featured\\\",\\\"type\\\":\\\"boost\\\",\\\"subzone_id\\\":5010,\\\"total_score\\\":0.16447641942284968,\\\"original_rank\\\":173,\\\"boosted_rank\\\":7}\",\"subzone_id\":\"5010\",\"flink_display_page\":\"dineout_home\"}",
                            "event_names": {
                                "tap": "{\"action\":\"click\"}",
                                "impression": "{\"action\":\"impression\"}",
                                "served": "{\"action\":\"serve\"}"
                            }
                        }
                    ],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                },
                {
                    "type": "restaurant",
                    "info": {
                        "resId": 21634839,
                        "name": "Kritunga",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21634839\/f75d3770211eb2165964b422715d5cb3_o2_featured_v2.jpg",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21634839\/f75d3770211eb2165964b422715d5cb3_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21634839\/f75d3770211eb2165964b422715d5cb3_o2_featured_v2.jpg"
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "3.7",
                            "rating_text": "3.7",
                            "rating_subtitle": "Good",
                            "rating_color": "9ACD32",
                            "votes": "3,093",
                            "subtext": "REVIEWS",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "",
                                    "reviewCount": "0",
                                    "reviewTextSmall": "0 Reviews",
                                    "subtext": "Does not offer Dining",
                                    "color": "",
                                    "ratingV2": "-",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "100"
                                    },
                                    "textColorV2": {
                                        "type": "green",
                                        "tint": "500"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "3.7",
                                    "reviewCount": "3,093",
                                    "reviewTextSmall": "3,093 Reviews",
                                    "subtext": "3,093 Delivery Reviews",
                                    "color": "#E23744",
                                    "ratingV2": "3.7",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "500"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b9750 for two"
                        },
                        "cfo": {
                            "text": "\u20b9300 for one"
                        },
                        "locality": {
                            "name": "Electronic City, Bangalore",
                            "address": "94, 2nd Floor, 14th Cross, Phase 1, Rhythm Square Building, Neeladri Nagar, Main Road, Opposite Ajmera Infinity, Electronic City, Bangalore",
                            "localityUrl": "bangalore\/electronic-city-restaurants"
                        },
                        "timing": {
                            "text": "Closes in 57 minutes",
                            "color": "#e5521f"
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/biryani\/",
                                "name": "Biryani"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b9750 for two"
                        }
                    },
                    "order": [],
                    "gold": [],
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/kritunga-1-electronic-city-bangalore\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "3.6 km",
                    "isPromoted": true,
                    "promotedText": "Promoted",
                    "trackingData": [
                        {
                            "table_name": "jadtracking",
                            "payload": "{\"banner_id\":\"9605046\",\"bzone\":\"0\",\"campaign_id\":\"18582101\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21634839\",\"isNewAd\":\"34\",\"ad_position\":\"8\",\"slider_position\":\"8\",\"slider_sequence\":\"8\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.031726\\\",\\\"cost_for_two_ctr\\\":\\\"0\\\",\\\"distance\\\":\\\"3.3468527793884277\\\",\\\"organic_ctr\\\":\\\"0\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"754\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.1911438178011799\\\",\\\"cost_for_two_ctr\\\":\\\"0\\\",\\\"cost_per_unit\\\":\\\"0.08073518389682556\\\",\\\"distance\\\":\\\"0.3717908115138128\\\",\\\"organic_ctr\\\":\\\"0\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.2799470549305096\\\"},\\\"section_name\\\":\\\"featured\\\",\\\"type\\\":\\\"boost\\\",\\\"subzone_id\\\":5010,\\\"total_score\\\":0.1533687765676356,\\\"original_rank\\\":316,\\\"boosted_rank\\\":8}\",\"subzone_id\":\"5010\",\"flink_display_page\":\"dineout_home\"}",
                            "event_names": {
                                "tap": "{\"action\":\"click\"}",
                                "impression": "{\"action\":\"impression\"}",
                                "served": "{\"action\":\"serve\"}"
                            }
                        }
                    ],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                },
                {
                    "type": "restaurant",
                    "info": {
                        "resId": 51637,
                        "name": "24@43 - The Oterra",
                        "image": {
                            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/51637\/978343a8a1d283c36efb7ecf6ea02669_featured_v2.jpg",
                            "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/51637\/978343a8a1d283c36efb7ecf6ea02669_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                        },
                        "o2FeaturedImage": {
                            "url": false
                        },
                        "rating": {
                            "has_fake_reviews": 0,
                            "aggregate_rating": "4.2",
                            "rating_text": "4.2",
                            "rating_subtitle": "Very Good",
                            "rating_color": "5BA829",
                            "votes": "1,068",
                            "subtext": "REVIEW",
                            "is_new": false
                        },
                        "ratingNew": {
                            "newlyOpenedObj": null,
                            "suspiciousReviewObj": null,
                            "ratings": {
                                "DINING": {
                                    "rating_type": "DINING",
                                    "rating": "4.2",
                                    "reviewCount": "1,068",
                                    "reviewTextSmall": "1,068 Reviews",
                                    "subtext": "1,068 Dining Reviews",
                                    "color": "#1C1C1C",
                                    "ratingV2": "4.2",
                                    "subtitle": "DINING",
                                    "sideSubTitle": "Dining Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "newOnDining": false
                                },
                                "DELIVERY": {
                                    "rating_type": "DELIVERY",
                                    "rating": "",
                                    "reviewCount": "0",
                                    "reviewTextSmall": "0 Reviews",
                                    "subtext": "Does not offer Delivery",
                                    "color": "",
                                    "ratingV2": "-",
                                    "subtitle": "DELIVERY",
                                    "sideSubTitle": "Delivery Ratings",
                                    "bgColorV2": {
                                        "type": "green",
                                        "tint": "100"
                                    },
                                    "textColorV2": {
                                        "type": "green",
                                        "tint": "500"
                                    },
                                    "newOnDelivery": false
                                }
                            }
                        },
                        "cft": {
                            "text": "\u20b93,700 for two"
                        },
                        "cfo": {
                            "text": "\u20b91,500 for one"
                        },
                        "locality": {
                            "name": "Electronic City, Bangalore",
                            "address": "43, Phase 1, The Oterra Hotel, Electronic City, Bangalore",
                            "localityUrl": "bangalore\/electronic-city-restaurants"
                        },
                        "timing": {
                            "text": "",
                            "color": ""
                        },
                        "cuisine": [
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                                "name": "North Indian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                                "name": "Asian"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                                "name": "Continental"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                                "name": "Fast Food"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/biryani\/",
                                "name": "Biryani"
                            },
                            {
                                "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                                "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                                "name": "Desserts"
                            }
                        ],
                        "should_ban_ugc": false,
                        "costText": {
                            "text": "\u20b93,700 for two"
                        }
                    },
                    "order": [],
                    "gold": {
                        "instant": 10,
                        "welcome_offer": false,
                        "gold_offer": false,
                        "text": "Flat",
                        "offerValue": "10% OFF",
                        "isGoldIcon": false
                    },
                    "takeaway": [],
                    "cardAction": {
                        "text": "",
                        "clickUrl": "\/bangalore\/2443-the-oterra-electronic-city\/info",
                        "clickActionDeeplink": ""
                    },
                    "distance": "1.8 km",
                    "isPromoted": false,
                    "promotedText": "",
                    "trackingData": [],
                    "allCTA": [],
                    "promoOffer": "",
                    "checkBulkOffers": false,
                    "bulkOffers": [],
                    "isDisabled": false,
                    "bottomContainers": []
                }
];

export default cardsList;
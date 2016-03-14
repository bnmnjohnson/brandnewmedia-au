/*
 * Universal Video Background v1.7
 *
 * Copyright 2014-2016, LambertGroup
 * 
*/


(function($) {
    var currentCarouselTop=0;   
    var val = navigator.userAgent.toLowerCase();


    
    function deactivatePlaylistRecord(options,current_obj,the_record) {
            the_record.css({
                'background':options.thumbsBgOffColor,
                'border-color':options.thumbsBorderColorOFF
            });
        

            
            var playlist_img=the_record.find('img:first');
            playlist_img.css({
                        'opacity':options.thumbsBgOffImgOpacity/100,
                        'filter':'alpha(opacity='+options.thumbsBgOffImgOpacity+')'
            }); 
    }   
    
    
    function activatePlaylistRecord(options,current_obj,the_record) {
        //alert (the_record.css('background')+' -- '+options.thumbsBgOnColor+' -- '+the_record.attr('rel'));
            the_record.css({
                'background':options.thumbsBgOnColor,
                'border-color':options.thumbsBorderColorON
            });
            var playlist_img=the_record.find('img:first');
            playlist_img.css({
                    'opacity':options.thumbsBgOnImgOpacity/100,
                    'filter':'alpha(opacity='+options.thumbsBgOnImgOpacity+')'
            });
    }   


    
    
    // navigation
    function universal_video_background_navigation(direction,current_obj,options,total_images,thumbsHolder_Thumbs,universal_video_background_container,thumbsHolder_Thumb,universal_video_background_thumbsHolder,imgs,universal_video_background_vimeoDiv_ID,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav) {
        var navigateAllowed=true;
        if ((!options.loop && current_obj.current_img_no+direction>=total_images) || (!options.loop && current_obj.current_img_no+direction<0))
            navigateAllowed=false;
        if (navigateAllowed) {
            //deactivate previous
            //$(thumbsHolder_Thumbs[current_obj.current_img_no]).removeClass('thumbsHolder_ThumbON');
            deactivatePlaylistRecord(options,current_obj,$(thumbsHolder_Thumbs[current_obj.current_img_no]));
            
            hideThePlayer(current_obj,options,universal_video_background_container,universal_video_background_vimeoDiv_ID);
            //alert (current_obj.current_img_no);
            //set current img
            if (options.randomizeVideos && !current_obj.bottomNavClicked) {
                var rand_no=Math.floor(Math.random() * total_images);
                if (current_obj.current_img_no===rand_no)
                    current_obj.current_img_no=Math.floor(Math.random() * total_images);
                else
                    current_obj.current_img_no=rand_no;
            } else {
                if (current_obj.current_img_no+direction>=total_images) {
                    current_obj.current_img_no=0;
                } else if (current_obj.current_img_no+direction<0) {
                    current_obj.current_img_no=total_images-1;
                } else {
                    current_obj.current_img_no+=direction;
                }
            }
            
            
        
            
            
            //activate current
            //$(thumbsHolder_Thumbs[current_obj.current_img_no]).addClass('thumbsHolder_ThumbON');
            activatePlaylistRecord(options,current_obj,$(thumbsHolder_Thumbs[current_obj.current_img_no]));
            //auto scroll carousel if needed
            currentCarouselLeft=universal_video_background_thumbsHolder.css('left').substr(0,universal_video_background_thumbsHolder.css('left').lastIndexOf('px'));
            if (current_obj.current_img_no===0 || current_obj.current_img_no===total_images-1) {
              carouselScroll(0,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb,current_obj);
            } else {
              carouselScroll(1001,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb,current_obj);
            }
            current_obj.currentImg = $(imgs[current_obj.current_img_no]);
            current_obj.bottomNavClicked=false;
            //alert (current_obj.currentImg.attr('data-youtube') + ' || '+current_obj.currentImg.attr('data-vimeo'));
            if ((current_obj.currentImg.attr('data-youtube')!=undefined  && current_obj.currentImg.attr('data-youtube')!='') || (current_obj.currentImg.attr('data-vimeo')!=undefined  && current_obj.currentImg.attr('data-vimeo')!='') || (current_obj.currentImg.attr('data-selfhostedMP4')!=undefined  && current_obj.currentImg.attr('data-selfhostedMP4')!='')) {
                showThePlayer(current_obj,options,universal_video_background_container,universal_video_background_vimeoDiv_ID,imgs);
                if (options.width100Proc && options.height100Proc && options.setAsBg) {
                    resizeVideoBg(current_obj,options,imgs,universal_video_background_container);
                }                   
            }
            
        } // if navigateAllowed
    };
    
    
    function carouselScroll(direction,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb,current_obj) {
        currentCarouselLeft=universal_video_background_thumbsHolder.css('left').substr(0,universal_video_background_thumbsHolder.css('left').lastIndexOf('px'));
        if (direction===1 || direction===-1) {
            current_obj.isCarouselScrolling=true;
            universal_video_background_thumbsHolder.css('opacity','0.5');
            universal_video_background_thumbsHolder.animate({
                opacity: 1,
                left: '+='+direction*current_obj.carouselStep
              }, 500, 'easeOutCubic', function() {
                  // Animation complete.
                  disableCarouselNav(current_obj,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb);                         
                  current_obj.isCarouselScrolling=false;
            });             
        } else {
                if ( currentCarouselLeft != (-1) * Math.floor( current_obj.current_img_no/options.numberOfThumbsPerScreen )*current_obj.carouselStep) {
                    current_obj.isCarouselScrolling=true;
                    universal_video_background_thumbsHolder.css('opacity','0.5');
                    universal_video_background_thumbsHolder.animate({
                        opacity: 1,
                        left: (-1) * Math.floor( current_obj.current_img_no/options.numberOfThumbsPerScreen )*current_obj.carouselStep
                      }, 500, 'easeOutCubic', function() {
                          // Animation complete.
                          disableCarouselNav(current_obj,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb);                         
                          current_obj.isCarouselScrolling=false;
                    });
                }
        }
    
        
    };
    
    function disableCarouselNav(current_obj,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb) {
        currentCarouselLeft=universal_video_background_thumbsHolder.css('left').substr(0,universal_video_background_thumbsHolder.css('left').lastIndexOf('px'));
        if (currentCarouselLeft <0 ) {
            if (universal_video_background_carouselLeftNav.hasClass('carouselLeftNavDisabled'))
                universal_video_background_carouselLeftNav.removeClass('carouselLeftNavDisabled');
        } else {
            universal_video_background_carouselLeftNav.addClass('carouselLeftNavDisabled');
        }       
        
        if (Math.abs(currentCarouselLeft-current_obj.carouselStep)<((2*current_obj.thumbBorderWidth+thumbsHolder_Thumb.width())+current_obj.thumbMarginLeft)*total_images) {
            if (universal_video_background_carouselRightNav.hasClass('carouselRightNavDisabled'))
                universal_video_background_carouselRightNav.removeClass('carouselRightNavDisabled');
        } else {
            universal_video_background_carouselRightNav.addClass('carouselRightNavDisabled');
        }               
    };




            function rearangethumbs(current_obj,options,total_images,universal_video_background_container,thumbsHolder_Thumbs,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,thumbsHolder_Thumb,universal_video_background_thumbsHolderVisibleWrapper,universal_video_background_thumbsHolderWrapper) {
                        //thumbs
                        universal_video_background_thumbsHolderWrapper.height(parseInt(options.origthumbsHolderWrapperH/(options.origWidth/options.width),10));
                        if (parseInt(options.origthumbsHolderWrapperH/(options.origWidth/options.width),10) < options.thumbsWrapperMinHeight)
                            universal_video_background_thumbsHolderWrapper.height(options.thumbsWrapperMinHeight);
                        universal_video_background_thumbsHolderWrapper.css({
                            'top':options.height-2*parseInt(options.borderWidth/(options.origWidth/options.width),10)-universal_video_background_thumbsHolderWrapper.height()-parseInt(options.thumbsWrapperMarginTop/(options.origWidth/options.width),10)+'px',
                            'width':options.width-2*parseInt(options.borderWidth/(options.origWidth/options.width),10)+'px',
                            'padding-top':parseInt(options.thumbsWrapperTopPadding/(options.origWidth/options.width),10),
                            'padding-bottom':parseInt(options.thumbsWrapperBottomPadding/(options.origWidth/options.width),10),
                            'border-left':parseInt(options.borderWidth/(options.origWidth/options.width),10)+'px solid '+options.borderColor,
                            'border-right':parseInt(options.borderWidth/(options.origWidth/options.width),10)+'px solid '+options.borderColor,
                            'left':((-1)*parseInt(options.borderWidth/(options.origWidth/options.width)+0.5,10))+'px'                               
                            //"margin-top":parseInt(options.borderWidth/(options.origWidth/options.width),10)+parseInt(options.thumbsWrapperMarginTop/(options.origWidth/options.width),10)+"px","margin-bottom":"210px",
                            //"margin-top":parseInt(options.thumbsWrapperMarginTop*parseInt(options.origthumbsHolderWrapperH/(options.origWidth/options.width),10)/options.origthumbsHolderWrapperH,10)+"px",
                        });

                        
                        //alert (universal_video_background_thumbsHolderWrapper.width()+'  --  '+universal_video_background_thumbsHolderWrapper.css('border-left-width')+'  --  '+universal_video_background_thumbsHolderWrapper.css('border-right-width')+'   ---   '+options.width);

                        bgTopCorrection=1;

                        universal_video_background_carouselLeftNav.css('background-position','0px '+((universal_video_background_thumbsHolderWrapper.height()-options.origthumbsHolderWrapperH)/2+bgTopCorrection)+'px');
                        universal_video_background_carouselRightNav.css('background-position','0px '+((universal_video_background_thumbsHolderWrapper.height()-options.origthumbsHolderWrapperH)/2+bgTopCorrection)+'px');
                        
                        universal_video_background_thumbsHolderVisibleWrapper.css('width',options.width-2*parseInt(options.borderWidth/(options.origWidth/options.width),10)-universal_video_background_carouselLeftNav.width()-universal_video_background_carouselRightNav.width());
                        options.origWidthThumbsHolderVisibleWrapper=options.origWidth-universal_video_background_carouselLeftNav.width()-universal_video_background_carouselRightNav.width();               
                        

                        thumbsHolder_Thumbs.css({
                            'width':parseInt(options.origThumbW/(options.origWidthThumbsHolderVisibleWrapper/universal_video_background_thumbsHolderVisibleWrapper.width()),10)+'px',
                            'height':parseInt(options.origThumbH/(options.origWidthThumbsHolderVisibleWrapper/universal_video_background_thumbsHolderVisibleWrapper.width()),10)+'px'

                        });
                        
                        
                        var imageInside = $('.thumbsHolder_ThumbOFF', universal_video_background_container).find('img:first');

                        imageInside.css({
                            "width":thumbsHolder_Thumbs.width()+"px",
                            "height":thumbsHolder_Thumbs.height()+"px"
                            //"margin-top":parseInt((universal_video_background_thumbsHolderWrapper.height()-thumbsHolder_Thumbs.height())/2,10)+"px"
                        });

                        if (parseInt(options.origthumbsHolderWrapperH/(options.origWidth/options.width),10) < options.thumbsWrapperMinHeight) {
                            universal_video_background_thumbsHolderVisibleWrapper.css({
                                'top':parseInt((universal_video_background_thumbsHolderWrapper.height()-thumbsHolder_Thumbs.height())/2,10)+'px'
                            });
                        } else {
                            universal_video_background_thumbsHolderVisibleWrapper.css({
                                'top':'auto'
                            });
                        }
                        
                        
                        
                        current_obj.thumbMarginLeft=Math.floor( (universal_video_background_thumbsHolderWrapper.width()-universal_video_background_carouselLeftNav.width()-universal_video_background_carouselRightNav.width()-(2*current_obj.thumbBorderWidth+thumbsHolder_Thumb.width())*options.numberOfThumbsPerScreen)/(options.numberOfThumbsPerScreen-1) );
                        thumb_i=-1;
                        universal_video_background_thumbsHolder.children().each(function() {
                            thumb_i++;
                            theThumb = $(this);
                            //theThumb.css('background-position','center '+(options.origWidth/options.width)+'px');
                            if ( thumb_i<=0 ) {
                                theThumb.css('margin-left',Math.floor( ( universal_video_background_thumbsHolderWrapper.width()-universal_video_background_carouselLeftNav.width()-universal_video_background_carouselRightNav.width()-(current_obj.thumbMarginLeft+(2*current_obj.thumbBorderWidth+theThumb.width()))*(options.numberOfThumbsPerScreen-1) - (2*current_obj.thumbBorderWidth+theThumb.width()) )/2 )+'px');
                            } else {
                                theThumb.css('margin-left',current_obj.thumbMarginLeft+'px');
                            }
                            
                            //alert (thumbsHolder_Thumb.width()+' -- '+current_obj.thumbMarginLeft);
                        });

                        
                        current_obj.carouselStep=((2*current_obj.thumbBorderWidth+thumbsHolder_Thumb.width())+current_obj.thumbMarginLeft)*options.numberOfThumbsPerScreen;


                        
                        if (options.numberOfThumbsPerScreen >= total_images) {
                            switch(options.bottomNavPos) {
                                case 'left':
                                  universal_video_background_thumbsHolderVisibleWrapper.css('left',options.bottomNavLateralMargin+current_obj.thumbMarginLeft+'px');
                                  break;
                                case 'right':
                                  universal_video_background_thumbsHolderVisibleWrapper.css('left',(options.width-((2*current_obj.thumbBorderWidth+thumbsHolder_Thumbs.width()+current_obj.thumbMarginLeft)*total_images))-options.bottomNavLateralMargin+'px');
                                  break;
                                default:
                                  universal_video_background_thumbsHolderVisibleWrapper.css('left',parseInt((universal_video_background_thumbsHolderWrapper.width() - ((2*current_obj.thumbBorderWidth+thumbsHolder_Thumb.width())+current_obj.thumbMarginLeft)*total_images)/2,10)+'px');
                            }
                        }
            
            }


            function resizeVideoBg(current_obj,options,imgs,universal_video_background_container) {
                  var cur_videoProportionWidth=options.videoProportionWidth;  //ex:16 from 16/9
                  //var cur_videoProportionHeight = options.videoProportionHeight;
                  var cur_videoProportionHeight=9;
                  if ($(imgs[current_obj.current_img_no]).attr('data-videoProportionWidth')!=undefined && $(imgs[current_obj.current_img_no]).attr('data-videoProportionWidth')!='')
                      cur_videoProportionWidth=$(imgs[current_obj.current_img_no]).attr('data-videoProportionWidth');
                      
                  //alert (cur_videoProportionWidth);
                  
                  var idealVideoWidth = 1280; // youtube videos have 1280x720 = 16/9
                  var ratioUnit = idealVideoWidth / cur_videoProportionWidth;
                  var idealVideoHeight = parseInt(ratioUnit*cur_videoProportionHeight,10);
                  
                  /*var new_VideoWidth=idealVideoWidth;
                  var new_VideoHeight=idealVideoHeight;*/

                  windowW = $(window).width()+1;
                  windowH = $(window).height();
                  var scaleFact = 1/(idealVideoWidth/windowW);
                  if ((idealVideoHeight/windowH) < (idealVideoWidth/windowW)) {
                      scaleFact = 1/(idealVideoHeight/windowH);
                  }
                  if (cur_videoProportionWidth!=16)
                      scaleFact+=0.11;/**/
                  
                  //alert(scaleFact);
                  if (current_obj.haveYouTube) {
                      $('.lbg_player',universal_video_background_container).css({
                          'width': (idealVideoWidth*scaleFact)+'px',
                          'height': (idealVideoHeight*scaleFact)+'px',
                          'left': parseInt(((windowW-idealVideoWidth*scaleFact) / 2),10)+'px',
                          'top': parseInt(((windowH-idealVideoHeight*scaleFact) / 2),10)+'px'
                      });
                  }
                  if (current_obj.haveVimeo) {
                      $('.lbg_vimeo_player',universal_video_background_container).css({
                          'width': (idealVideoWidth*scaleFact)+'px',
                          'height': (idealVideoHeight*scaleFact)+'px',
                          'left': parseInt(((windowW-idealVideoWidth*scaleFact) / 2),10)+'px',
                          'top': parseInt(((windowH-idealVideoHeight*scaleFact) / 2),10)+'px'
                      });
                  } 
                  
                  if (current_obj.haveSelfHosted) {
                     $('#'+current_obj.html5_video_id).css({        
                          'width': (idealVideoWidth*scaleFact)+'px',
                          'height': (idealVideoHeight*scaleFact)+'px',
                          'left': parseInt(((windowW-idealVideoWidth*scaleFact) / 2),10)+'px',
                          'top': parseInt(((windowH-idealVideoHeight*scaleFact) / 2),10)+'px'
                      });
                  }                         
      
            }



            function doResize(current_obj,options,total_images,imgs,universal_video_background_the,bannerControls,universal_video_background_container,thumbsHolder_Thumbs,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,thumbsHolder_Thumb,bottomNavBut,universal_video_background_bottomNav,universal_video_background_thumbsHolderVisibleWrapper,universal_video_background_thumbsHolderWrapper,bottomNavWidth,universal_video_background_border) {
                    var ver_ie=getInternetExplorerVersion();
                    if (options.width100Proc && options.height100Proc && !options.setAsBg) {
                        var bodyOverflow_initial=$('body').css('overflow');
                        $('body').css('overflow','hidden');
                    }
                    
                    
                    /*responsiveWidth=universal_video_background_the.parent().parent().width();
                    responsiveHeight=universal_video_background_the.parent().parent().height();*/
                    responsiveWidth=universal_video_background_the.parent().parent().parent().width();
                    responsiveHeight=universal_video_background_the.parent().parent().parent().height();                        
                    if (options.responsiveRelativeToBrowser) {
                        responsiveWidth=$(window).width();
                        responsiveHeight=$(window).height();
                    }
                    

                    if (options.width100Proc) {
                        options.width=responsiveWidth;
                    }
                    
                    if (options.height100Proc) {
                        options.height=responsiveHeight;
                    }

                    if (options.origWidth!=responsiveWidth || options.width100Proc) {
                        if (options.origWidth>responsiveWidth || options.width100Proc) {
                            options.width=responsiveWidth;
                        } else if (!options.width100Proc) {
                            options.width=options.origWidth;
                        }
                        if (!options.height100Proc)
                            options.height=options.width/current_obj.bannerRatio;
                            
                        options.width=parseInt(options.width,10);
                        options.height=parseInt(options.height,10);                             

                        
                        
                        /*** reposition elements start **/
                        //set banner size
                        universal_video_background_border.width(options.width);         
                        universal_video_background_border.height(options.height);
                        
                        universal_video_background_container.width(parseInt(options.width - 2*options.borderWidth/(options.origWidth/options.width),10));
                        universal_video_background_container.height(parseInt(options.height - 2*options.borderWidth/(options.origWidth/options.width),10));
                        universal_video_background_container.css({
                            'left':options.borderWidth/(options.origWidth/options.width)+'px',
                            'top':options.borderWidth/(options.origWidth/options.width)+'px'
                        });
                        
                        if (options.width100Proc && options.height100Proc && options.setAsBg) {
                            resizeVideoBg(current_obj,options,imgs,universal_video_background_container);
                        } else {
                            $('.lbg_player',universal_video_background_container).width(universal_video_background_container.width());
                            $('.lbg_player',universal_video_background_container).height(universal_video_background_container.height());
            
                            $('.lbg_vimeo_player',universal_video_background_container).width(universal_video_background_container.width());
                            $('.lbg_vimeo_player',universal_video_background_container).height(universal_video_background_container.height());  
                        }
                        

                        
                        rearangethumbs(current_obj,options,total_images,universal_video_background_container,thumbsHolder_Thumbs,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,thumbsHolder_Thumb,universal_video_background_thumbsHolderVisibleWrapper,universal_video_background_thumbsHolderWrapper);
                    }
                    
                    carouselScroll(0,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb,current_obj);
                    

                    if (options.width100Proc && options.height100Proc && !options.setAsBg) {
                        $('body').css('overflow',bodyOverflow_initial);
                    }
            }   



            function getInternetExplorerVersion()
            // -1 - not IE
            // 7,8,9 etc
            {
               var rv = -1; // Return value assumes failure.
               if (navigator.appName == 'Microsoft Internet Explorer')
               {
                  var ua = navigator.userAgent;
                  var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                  if (re.exec(ua) != null)
                     rv = parseFloat( RegExp.$1 );
               }
               else if (navigator.appName == 'Netscape')
               {
                 var ua = navigator.userAgent;
                 var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                 if (re.exec(ua) != null)
                   rv = parseFloat( RegExp.$1 );
               }
               return parseInt(rv,10);
            }   
            
            var supports_h264_baseline_video = function(videoID){
              var v = document.getElementById(videoID);
              return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
            }                   
            
            
            function detectBrowserAndVideo(ver_ie,playlist_item,videoID) {
                var currentVideo=playlist_item.attr('data-selfhostedWEBM');
                var val = navigator.userAgent.toLowerCase();
        
                
                if (val.indexOf("chrome") != -1 || val.indexOf("msie") != -1 || val.indexOf("safari") != -1 || val.indexOf("android") != -1)
                    currentVideo=playlist_item.attr('data-selfhostedMP4');
                
                //if (val.match(/(iPad)|(iPhone)|(iPod)|(webOS)/i))
                if (val.indexOf("ipad") != -1 || val.indexOf("iphone") != -1 || val.indexOf("ipod") != -1 || val.indexOf("webos") != -1)
                    currentVideo=playlist_item.attr('data-selfhostedMP4');
                    
                if (val.indexOf("android") != -1)
                    currentVideo=playlist_item.attr('data-selfhostedMP4');  
                    
                    
                if (ver_ie!=-1) {       
                    currentVideo=playlist_item.attr('data-selfhostedMP4');
                }
                
                if (val.indexOf("opera") != -1) {
                    currentVideo=playlist_item.attr('data-selfhostedWEBM');
                    if (supports_h264_baseline_video(videoID)!='') {
                        currentVideo=playlist_item.attr('data-selfhostedMP4');
                    }                   
                }
                if (val.indexOf("opr/") != -1) {
                    currentVideo=playlist_item.attr('data-selfhostedWEBM');
                    if (supports_h264_baseline_video(videoID)!='') {
                        currentVideo=playlist_item.attr('data-selfhostedMP4');
                    }                   
                }
                    
                if (val.indexOf("firefox") != -1  || val.indexOf("mozzila") != -1) {
                    currentVideo=playlist_item.attr('data-selfhostedWEBM');     
                    if (supports_h264_baseline_video(videoID)!='') {
                        currentVideo=playlist_item.attr('data-selfhostedMP4');
                    }
                }                   
                
                //var val = this.dataBrowser;
                //alert (currentVideo+ '  --  ' +val+ '  --  ' +ver_ie);
                return currentVideo;
            };                  
    
    
    
    function hideThePlayer(current_obj,options,universal_video_background_container,universal_video_background_vimeoDiv_ID) {
        //youtube
        if (current_obj.currentImg.attr('data-youtube')!=undefined && current_obj.currentImg.attr('data-youtube')!='' && current_obj.haveYouTube) {
            current_obj.player.stopVideo();
            $('.lbg_player',universal_video_background_container).css({ 
                'z-index':-1
                /*'display':'none',
                'width':0*/
            });
        }
        //vimeo
        if (current_obj.currentImg.attr('data-vimeo')!=undefined && current_obj.currentImg.attr('data-vimeo')!='' && current_obj.haveVimeo) {
            current_obj.vimeo_player.api('pause');
            $('.lbg_vimeo_player',universal_video_background_container).css({   
                'z-index':-1
                /*'display':'none',
                'width':0*/
            });
            
            current_obj.vimeo_player.api('getVolume', function (value) {
                //alert (value);
                options.initialVolume=value;
                //current_obj.vimeo_player.api('setVolume', options.initialVolume);
            });
            //$('#'+universal_video_background_vimeoDiv_ID).attr('src',''); 
        }       
        //selfHosted
        if (current_obj.currentImg.attr('data-selfhostedMP4')!=undefined && current_obj.currentImg.attr('data-selfhostedMP4')!='' && current_obj.haveSelfHosted) {
            document.getElementById(current_obj.html5_video_id).pause();
            //document.getElementById(current_obj.html5_video_id).currentTime = 0;
            //document.getElementById(current_obj.html5_video_id).src='';
            $('#'+current_obj.html5_video_id).css({     
                'z-index':-1,
                'width':0,
                'height':0/*,
                'display':'none',
                'width':0*/
            });
        }
    }
    
    
    function showThePlayer(current_obj,options,universal_video_background_container,universal_video_background_vimeoDiv_ID,imgs) {
        options.autoPlayFirstVideo=true;
        //youtube
        if (current_obj.currentImg.attr('data-youtube')!=undefined && current_obj.currentImg.attr('data-youtube')!='' && current_obj.haveYouTube) {
            //universal_video_background_container.css('background',options.borderColor);
            universal_video_background_container.css('background','#000000');
            //current_obj.player.clearVideo();
            if (val.indexOf("ipad") != -1 || val.indexOf("iphone") != -1 || val.indexOf("ipod") != -1 || val.indexOf("webos") != -1 || navigator.userAgent.indexOf('Android') != -1) {
                current_obj.player.cueVideoById(current_obj.currentImg.attr('data-youtube'));
            } else {
                current_obj.player.loadVideoById(current_obj.currentImg.attr('data-youtube'), 0, options.suggestedQuality);
            }
            
            //current_obj.player.setVolume(options.initialVolume*100);
            
            $('.lbg_player',universal_video_background_container).css({     
                'z-index':0
            });         
        }
        //vimeo
        if (current_obj.currentImg.attr('data-vimeo')!=undefined && current_obj.currentImg.attr('data-vimeo')!='' && current_obj.haveVimeo) {
            //universal_video_background_container.css('background',options.borderColor);
            universal_video_background_container.css('background','#000000');
            /*$('.lbg_vimeo_player',universal_video_background_container).css({     
                'z-index':3
            });*/
            /*var the_vimeo_div=$('.lbg_vimeo_player', universal_video_background_container);
            var the_vimeo_iframe=$('iframe', the_vimeo_div);
            //alert (the_vimeo_iframe.attr('src'));
            the_vimeo_iframe.attr('src','//player.vimeo.com/video/'+$(imgs[current_obj.current_img_no]).attr('data-vimeo')+'?api=1&amp;player_id='+universal_video_background_vimeoDiv_ID);*/
            $('#'+universal_video_background_vimeoDiv_ID).attr('src','//player.vimeo.com/video/'+$(imgs[current_obj.current_img_no]).attr('data-vimeo')+'?api=1&amp;player_id='+universal_video_background_vimeoDiv_ID);
        }       
        
        
        //selfHosted
        if (current_obj.currentImg.attr('data-selfhostedMP4')!=undefined && current_obj.currentImg.attr('data-selfhostedMP4')!='' && current_obj.haveSelfHosted) {
            var ver_ie=getInternetExplorerVersion();
            universal_video_background_container.css('background','#000000');
            /*document.getElementById(current_obj.html5_video_id).src='';
            document.getElementById(current_obj.html5_video_id).load();*/
            var d = new Date();
            document.getElementById(current_obj.html5_video_id).src=detectBrowserAndVideo(ver_ie,current_obj.currentImg,current_obj.html5_video_id)+"?time=" + d.getTime();;
            document.getElementById(current_obj.html5_video_id).load();
            $('#'+current_obj.html5_video_id).css({     
                'z-index':0,
                'width':'100%',
                'height':'100%'/*,
                'display':'block'
                'width':0*/
            });
            //document.getElementById(current_obj.html5_video_id).volume=options.initialVolume;
            document.getElementById(current_obj.html5_video_id).play();
        }       
    }   



    function activate_tooltip(options,imgs) {
          if (options.showTooltip) {
              //$(this).attr('title')
              //activate tooltip
              //$(imgs[total_images-1]).attr('data-youtube')
              $('.lbg_grid_tooltip').tooltip({
                  content: function () { return $(imgs[$(this).attr('rel')]).attr('data-title') },
                  position: {
                      my: "center bottom-20",
                      at: "center top",
                      using: function( position, feedback ) {
                          $( this ).css( position );
                          $( "<div>" )
                          .addClass( "lbg_grid_arrow" )
                          .addClass( feedback.vertical )
                          .addClass( feedback.horizontal )
                          .appendTo( this );
                      }
                  }
              });
          }
    }   
    
    
    
    
    
    
    
    $.fn.universal_video_background = function(options) {
    

        var options = $.extend({},$.fn.universal_video_background.defaults, options);

        return this.each(function() {
            var ver_ie=getInternetExplorerVersion();
            var universal_video_background_the = $(this);
            
                    responsiveWidth=universal_video_background_the.parent().width();
                    responsiveHeight=universal_video_background_the.parent().height();
                    if (options.responsiveRelativeToBrowser) {
                        responsiveWidth=$(window).width();
                        responsiveHeight=$(window).height();
                    }           
                    options.origWidth=options.width;
                    if (options.width100Proc)
                        options.width=responsiveWidth;
                    
                    options.origHeight=options.height;
                    if (options.height100Proc) {
                        options.height=responsiveHeight;
                    }
                        
                    if (options.responsive && (options.origWidth!=responsiveWidth || options.width100Proc)) {
                        if (options.origWidth>responsiveWidth || options.width100Proc) {
                            options.width=responsiveWidth;
                        } else {
                            options.width=options.origWidth;
                        }
                        if (!options.height100Proc)
                            options.height=options.width/(options.origWidth/options.origHeight);    
                    }   
                    
                    options.width=parseInt(options.width,10);
                    options.height=parseInt(options.height,10);                             
                    
                    if (options.width100Proc && options.height100Proc) {
                        options.borderWidth=0;
                    }           
            
            
            universal_video_background_the.css("display","block");
            
            //the controllers
            var universal_video_background_wrapBorder = $('<div></div>').addClass('universal_video_backgroundBorder');
            var universal_video_background_wrap = $('<div></div>').addClass('universal_video_background').addClass(options.skin);
            var bannerControls = $('<div class="bannerControls">   <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div>       </div>  ');                      
            universal_video_background_the.wrap(universal_video_background_wrap);
            if (options.texturePath) {
                if (ver_ie==-1 || (ver_ie!=-1 && ver_ie>=11)) {
                    universal_video_background_the.append('<div class="texture_over_image" />');
                    $('.texture_over_image', universal_video_background_container).css({
                        'background':"url("+options.texturePath+")"
                    });
                }

            }               
            universal_video_background_the.after(bannerControls);
            

            //the elements
            var universal_video_background_container = universal_video_background_the.parent('.universal_video_background');
            if (options.setAsBg) {
                universal_video_background_container.wrap('<div class="setAsBg" />');
            }
            bannerControls = $('.bannerControls', universal_video_background_container);
            
            universal_video_background_container.wrap(universal_video_background_wrapBorder);
            var universal_video_background_border = universal_video_background_container.parent('.universal_video_backgroundBorder');
            
            
            var universal_video_background_bottomNav = $('.bottomNav', universal_video_background_container);
            var universal_video_background_bottomOverThumb;

            
            if (!options.showBottomNav) {
                universal_video_background_bottomNav.css("display","none");
            }
            if (!options.showOnInitBottomNav) {
                universal_video_background_bottomNav.css("left","-5000px");
            }
            



            //thumbs
            var universal_video_background_thumbsHolderWrapper = $('.thumbsHolderWrapper', universal_video_background_container);
            var universal_video_background_thumbsHolderVisibleWrapper = $('.thumbsHolderVisibleWrapper', universal_video_background_container);
            var universal_video_background_thumbsHolder = $('.thumbsHolder', universal_video_background_container);
            
            var universal_video_background_carouselLeftNav;
            var universal_video_background_carouselRightNav;
            universal_video_background_carouselLeftNav=$('<div class="carouselLeftNav"></div>');
            universal_video_background_carouselRightNav=$('<div class="carouselRightNav"></div>');
            universal_video_background_thumbsHolderWrapper.append(universal_video_background_carouselLeftNav);
            universal_video_background_thumbsHolderWrapper.append(universal_video_background_carouselRightNav);
            universal_video_background_carouselRightNav.css('right','0');
            
            universal_video_background_thumbsHolder.css('width',universal_video_background_carouselLeftNav.width()+'px');

            if (!options.showBottomNav || !options.showOnInitBottomNav) {
                universal_video_background_thumbsHolderWrapper.css({
                    "opacity":0,
                    "display":"none"
                });
            }

            
            //youtube
            var randNo=Math.floor(Math.random()*100000);
            var youTubeContainer = $('<div></div>').addClass('lbg_player');
            universal_video_background_the.append(youTubeContainer);
            var universal_video_background_youtubeDiv_ID="lbg_player"+randNo;
            $('.lbg_player',universal_video_background_container).attr("id",universal_video_background_youtubeDiv_ID);
            
            //alert (universal_video_background_youtubeDiv_ID);
            
            //vimeo
            var vimeoContainer = $('<div></div>').addClass('lbg_vimeo_player');
            universal_video_background_the.append(vimeoContainer);
            var universal_video_background_vimeoDiv_ID="lbg_vimeo_player"+randNo;
            //$('.lbg_vimeo_player', universal_video_background_container).attr("id",universal_video_background_vimeoDiv_ID);
            
            
            universal_video_background_thumbsHolderWrapper.css({
                'background':options.thumbsWrapperBg
            });

    
                    

            


            
            //the vars
            var total_images=0;

            var current_obj = {
                current_img_no:0,
                currentImg:0,
                current_imgInside:'',
                is_very_first:true,
                windowWidth:0,
                currentThumb:new Array(),
                carouselStep:0,
                thumbMarginTop:0,
                thumbBorderWidth:0,
                thumbMarginLeft:0,
                bottomNavClicked:false,
                windowWidth:0,
                haveYouTube:false,
                haveVimeo:false,
                haveSelfHosted:false,
                html5_video_id:'html5_video_id'+randNo,
                bannerRatio:options.origWidth/options.origHeight,
                player:false,
                vimeo_player:false,
                vimeo_iframe:false
            };      



            var i = 0;

            
            //set banner size
            universal_video_background_border.width(options.width);         
            universal_video_background_border.height(options.height);
            universal_video_background_border.css("background",options.borderColor);
            
            universal_video_background_container.width(options.width - 2*options.borderWidth/(options.origWidth/options.width));
            universal_video_background_container.height(options.height - 2*options.borderWidth/(options.origWidth/options.width));
            universal_video_background_container.css({
                'left':options.borderWidth/(options.origWidth/options.width)+'px',
                'top':options.borderWidth/(options.origWidth/options.width)+'px'
            });

            bannerControls.width('100%');
            /*bannerControls.height('100%');*/
            
            /*universal_video_background_thumbsHolderVisibleWrapper.width(options.playlistWidth/(options.origWidth/options.width));
            universal_video_background_thumbsHolderVisibleWrapper.height(universal_video_background_container.height());
            
            
            universal_video_background_thumbsHolderWrapper.width(options.playlistWidth/(options.origWidth/options.width));
            universal_video_background_thumbsHolderWrapper.height(universal_video_background_container.height());
            universal_video_background_thumbsHolderWrapper.css({
                'top':0,
                'right':(-1)*(options.borderWidth/(options.origWidth/options.width)+options.playlistWidth/(options.origWidth/options.width))+'px'
            });
            
            
            universal_video_background_thumbsHolder.width(options.playlistWidth/(options.origWidth/options.width));
            universal_video_background_thumbsHolder.css('top',options.borderWidth/(options.origWidth/options.width)+'px');*/
            


    
            
            //get images
            var theul= universal_video_background_the.find('ul:first');
            var imgs = theul.children();
            var thumbsHolder_Thumb;
            var image_name='';
            var bottomNavWidth=0;
            var bottomNavMarginTop=0;
            var thumbsHolder_MarginTop=0;
            var thumbUnit='';
            var bottomNavBut;
            imgs.each(function() {
                current_obj.currentImg = $(this);
                if(!current_obj.currentImg.is('li')){
                    current_obj.currentImg = current_obj.currentImg.find('li:first');
                }
                    
                if(current_obj.currentImg.is('li')){
                    current_obj.currentImg.css('display','none');
                    total_images++;
                    if ($(imgs[total_images-1]).attr('data-youtube')!=undefined && $(imgs[total_images-1]).attr('data-youtube')!='') {
                        current_obj.haveYouTube=true;
                    }

                    if ($(imgs[total_images-1]).attr('data-vimeo')!=undefined && $(imgs[total_images-1]).attr('data-vimeo')!='') {
                        current_obj.haveVimeo=true;
                    }
                    
                    if ($(imgs[total_images-1]).attr('data-selfhostedMP4')!=undefined && $(imgs[total_images-1]).attr('data-selfhostedMP4')!='') {
                        current_obj.haveSelfHosted=true;
                    }
                
                    //universal_video_background_ thumbsHolder
                    //universal_video_background_ bottomNav
                    /*if (options.skin=="bullets") {
                               bottomNavBut = $('<div class="bottomNavButtonOFF" rel="'+ (total_images-1) +'"></div>');
                               universal_video_background_bottomNav.append(bottomNavBut);
                    
                    
                               bottomNavWidth+=parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length-2),10)+bottomNavBut.width();
                               bottomNavMarginTop=parseInt((universal_video_background_bottomNav.height()-parseInt(bottomNavBut.css('height').substring(0, bottomNavBut.css('height').length-2)))/2,10);
                               bottomNavBut.css('margin-top',bottomNavMarginTop+'px');
                               
                   }*/
                   

                    //thumbs universal_video_background_ thumbsHolder
                     //thumbs generate thumbsHolder
                    image_name=$(imgs[total_images-1]).attr('data-bottom-thumb');
                    //thumbsHolder_Thumb = $('<div class="thumbsHolder_ThumbOFF" rel="'+ (total_images-1) +'"><img src="'+ image_name + '"></div>');
                    thumbsHolder_Thumb = $('<div class="thumbsHolder_ThumbOFF lbg_grid_tooltip" rel="'+ (total_images-1) +'" title=""><img src="'+ image_name + '"></div>');
                    thumbsHolder_Thumb.width(options.origThumbImgW);
                    thumbsHolder_Thumb.height(options.origThumbImgH);
                    
                    universal_video_background_thumbsHolder.append(thumbsHolder_Thumb);
                    deactivatePlaylistRecord(options,current_obj,thumbsHolder_Thumb);   
                    if (options.origThumbW==0) {
                        if (options.numberOfThumbsPerScreen==0) {
                            options.numberOfThumbsPerScreen=Math.floor((options.origWidth-universal_video_background_carouselLeftNav.width()-universal_video_background_carouselRightNav.width())/(2*current_obj.thumbBorderWidth+thumbsHolder_Thumb.width()))-1;
                        }
                        if (options.width100Proc && !options.height100Proc) {
                            options.numberOfThumbsPerScreen-=3;
                        }
                        options.origThumbW=thumbsHolder_Thumb.width();
                        options.origThumbH=thumbsHolder_Thumb.height();
                        options.origthumbsHolderWrapperH=universal_video_background_thumbsHolderWrapper.height();
                        current_obj.thumbBorderWidth=thumbsHolder_Thumb.css('borderLeftWidth').substr(0,thumbsHolder_Thumb.css('borderLeftWidth').lastIndexOf('px'))
                        //alert (current_obj.thumbBorderWidth);
                        current_obj.thumbMarginLeft=Math.floor( (options.origWidth-universal_video_background_carouselLeftNav.width()-universal_video_background_carouselRightNav.width()-(2*current_obj.thumbBorderWidth+thumbsHolder_Thumb.width())*options.numberOfThumbsPerScreen)/(options.numberOfThumbsPerScreen-1) );
                    }


                    universal_video_background_thumbsHolder.css('width',universal_video_background_thumbsHolder.width()+current_obj.thumbMarginLeft+(2*current_obj.thumbBorderWidth+thumbsHolder_Thumb.width())+'px');
                
                    thumbsHolder_MarginTop=parseInt((universal_video_background_thumbsHolderWrapper.height()-parseInt(thumbsHolder_Thumb.css('height').substring(0, thumbsHolder_Thumb.css('height').length-2)))/2,10);
    

                    //alert(universal_video_background_thumbsHolderWrapper.height());
                    universal_video_background_thumbsHolder.css('height',universal_video_background_thumbsHolder.height()+current_obj.thumbMarginTop+thumbsHolder_Thumb.height()+'px');
                    /*if ( total_images<=1 ) {
                        thumbsHolder_Thumb.css('margin-top',Math.floor( ( universal_video_background_thumbsHolderWrapper.height()-2*options.borderWidth/(options.origWidth/options.width)-(current_obj.thumbMarginTop+thumbsHolder_Thumb.height())*(options.numberOfThumbsPerScreen-1) - thumbsHolder_Thumb.height() )/2 )+'px');
                    } else {
                        thumbsHolder_Thumb.css('margin-top',current_obj.thumbMarginTop+'px');
                    }*/

                }
                


            });
            



            
       
           
        var thumbsHolder_Thumbs=$('.thumbsHolder_ThumbOFF', universal_video_background_container);


        /*thumbsHolder_Thumbs.css({
           'border-color':options.thumbsBorderColorOFF
        });*/

        //disable left nav
        universal_video_background_carouselLeftNav.addClass('carouselLeftNavDisabled');
        
        //disable right nav and center thumbs
        if (options.numberOfThumbsPerScreen >= total_images) {
            universal_video_background_carouselRightNav.addClass('carouselRightNavDisabled');
            universal_video_background_carouselLeftNav.css('display','none');
            universal_video_background_carouselRightNav.css('display','none');//options.borderColor
            universal_video_background_thumbsHolderWrapper.css({
                'border-left':parseInt(options.borderWidth/(options.origWidth/options.width),10)+'px solid '+options.borderColor,
                'border-right':parseInt(options.borderWidth/(options.origWidth/options.width),10)+'px solid '+options.borderColor,
                'left':((-1)*parseInt(options.borderWidth/(options.origWidth/options.width),10))+'px'
            });
            //universal_video_background_thumbsHolderVisibleWrapper.css('left',parseInt((universal_video_background_thumbsHolderWrapper.width() - ((2*current_obj.thumbBorderWidth+thumbsHolder_Thumb.width())+current_obj.thumbMarginLeft)*total_images)/2,10)+'px');
        } else {
            universal_video_background_thumbsHolderVisibleWrapper.css('left',universal_video_background_carouselLeftNav.width()+'px');
        }
        
        rearangethumbs(current_obj,options,total_images,universal_video_background_container,thumbsHolder_Thumbs,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,thumbsHolder_Thumb,universal_video_background_thumbsHolderVisibleWrapper,universal_video_background_thumbsHolderWrapper);               

            
            

            
        
            
            //initialize first number image
            current_obj.current_img_no = options.firstImg;
            if (options.firstImg>total_images)
                current_obj.current_img_no=total_images;
            if (options.firstImg<0)
                current_obj.current_img_no=0;       
       
        
            //initialize first image number if randomize option is set
            if(options.randomizeVideos){
                current_obj.current_img_no = Math.floor(Math.random() * total_images);
            }
            
            activatePlaylistRecord(options,current_obj,$(thumbsHolder_Thumbs[current_obj.current_img_no])); 
            
            

            
                        
            
            //set youtube video start
            if (current_obj.haveYouTube) {
                      // 2. This code loads the IFrame Player API code asynchronously.
                      var tag = document.createElement('script');
                
                      tag.src = options.youtubeJsUrl;
                      var firstScriptTag = document.getElementsByTagName('script')[0];
                      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);/**/
          
                      
                      /*window.onYouTubeIframeAPIReady = function() {
                        //alert (universal_video_background_youtubeDiv_ID); 
                        current_obj.player = new YT.Player(universal_video_background_youtubeDiv_ID, {
                          width: options.width-options.playlistWidth-3*options.borderWidth,  
                          height: options.height-2*options.borderWidth,
                          videoId: 'sjsWiLKCF0U',
                          events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                          }
                        });
                      }*/
          
                      window.onYouTubeIframeAPIReady = function() {
                          var cur_showVideoControls=0;
                          if (options.showVideoControls) {
                            cur_showVideoControls=1;
                          }
                          if ($(imgs[current_obj.current_img_no]).attr('data-youtube')!=undefined && $(imgs[current_obj.current_img_no]).attr('data-youtube')!='') {
                                current_obj.player = new YT.Player(universal_video_background_youtubeDiv_ID, {
                                  width: options.width-2*options.borderWidth,  
                                  height: options.height-2*options.borderWidth,
                                  videoId: $(imgs[current_obj.current_img_no]).attr('data-youtube'),
                                  playerVars: {rel: 0, wmode: "transparent", controls: cur_showVideoControls, showinfo: cur_showVideoControls, html5: 1, modestbranding: 1,cc_load_policy:0,iv_load_policy:3,disablekb:1 },
                                  events: {
                                    'onReady': onPlayerReady,
                                    'onStateChange': onPlayerStateChange
                                  }
                                });
                                $('.lbg_player',universal_video_background_container).css({ 
                                    'z-index':3
                                });       
                          } else {
                                current_obj.player = new YT.Player(universal_video_background_youtubeDiv_ID, {
                                  width: '100%',  
                                  height: '100%',
                                  videoId: 'xoORbLlFsis', //perfectBlack
                                  playerVars: {rel: 0, wmode: "transparent", controls: cur_showVideoControls, showinfo: cur_showVideoControls, html5: 1, modestbranding: 1,cc_load_policy:0,iv_load_policy:3,disablekb:1},
                                  events: {
                                    'onReady': onPlayerReady,
                                    'onStateChange': onPlayerStateChange
                                  }
                                });                 
                          }
                        //showThePlayer(current_obj,options,universal_video_background_container,universal_video_background_vimeoDiv_ID,imgs)
                        //alert ("defined: "+current_obj.player);
                      }
                
                      // 4. The API will call this function when the video player is ready.
                      function onPlayerReady(event) {
                          /*$('.lbg_player',universal_video_background_container).css({ 
                              'z-index':3
                          });*/     
                          event.target.setPlaybackQuality(options.suggestedQuality);
                          if (val.indexOf("ipad") != -1 || val.indexOf("iphone") != -1 || val.indexOf("ipod") != -1 || val.indexOf("webos") != -1 || navigator.userAgent.indexOf('Android') != -1) {
                            //nothing  
                          } else {
                              //set initial volume
                              current_obj.player.setVolume(options.initialVolume*100);                                
                              
                              if (options.autoPlayFirstVideo) {
                                if ($(imgs[current_obj.current_img_no]).attr('data-youtube')!=undefined  && $(imgs[current_obj.current_img_no]).attr('data-youtube')!='') {
                                    event.target.playVideo();
                                }
                              } else {
                                event.target.pauseVideo();
                                current_obj.player.cueVideoById(current_obj.currentImg.attr('data-youtube'));
                              }
                          }
                          
                          /*current_obj.player.addEventListener('onStateChange', function(e) {
                              //console.log('State is:', e.data);
                              alert ("aa");
                          });*/
                      }
                
                      // 5. The API calls this function when the player's state changes.
                      //    The function indicates that when playing a video (state=1),
                      //    the player should play for six seconds and then stop.
                      //var done = false;
                      function onPlayerStateChange(event) {
                        //if (event.data == YT.PlayerState.PLAYING && !done) {
                         // setTimeout(stopVideo, 6000);
                          //done = true;
                        //}
                        if (event.data == YT.PlayerState.ENDED) {
                            //alert ("ended"+total_images);
                            if (total_images==1 && options.loop) { //loop the unique video and not the playlist
                                //current_obj.player.stopVideo();
                                current_obj.player.seekTo(0);
                                current_obj.player.playVideo();
                            } else {
                                universal_video_background_navigation(1,current_obj,options,total_images,thumbsHolder_Thumbs,universal_video_background_container,thumbsHolder_Thumb,universal_video_background_thumbsHolder,imgs,universal_video_background_vimeoDiv_ID,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav);
                            }
                            //Get rid of the player
                            //event.target.destroy();
                            //current_obj.player=false;
                        }             
                      }
                      function stopVideo() {
                        //current_obj.player.stopVideo();
                      }
                      
                      //$('.lbg_player',universal_video_background_container).css({ 
                          //'z-index':-1
                          /*'display':'none',
                          'width':0*/
                      //});
            }
            //set youtube video end         
            
            
            
            //set vimeo video start 
            if (current_obj.haveVimeo) {
                      // 2. This code loads the script asynchronously.
                      /*var tag_vimeo = document.createElement('script');
                
                      tag_vimeo.src = options.vimeoJsUrl;
                      var firstScriptTag_vimeo = document.getElementsByTagName('script')[0];
                      firstScriptTag_vimeo.parentNode.insertBefore(tag_vimeo, firstScriptTag_vimeo);*/              
                      
                        if ($(imgs[current_obj.current_img_no]).attr('data-vimeo')!=undefined && $(imgs[current_obj.current_img_no]).attr('data-vimeo')!='') {
                            $('.lbg_vimeo_player', universal_video_background_container).html('<iframe id="'+universal_video_background_vimeoDiv_ID+'" src="//player.vimeo.com/video/'+$(imgs[current_obj.current_img_no]).attr('data-vimeo')+'?api=1&amp;player_id='+universal_video_background_vimeoDiv_ID+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                            $('.lbg_vimeo_player',universal_video_background_container).css({   
                                  'z-index':0
                            });
                        } else {
                            //20009714
                            $('.lbg_vimeo_player', universal_video_background_container).html('<iframe id="'+universal_video_background_vimeoDiv_ID+'" src="//player.vimeo.com/video/?api=1&amp;player_id='+universal_video_background_vimeoDiv_ID+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                        }
                        
                        current_obj.vimeo_iframe = $('#'+universal_video_background_vimeoDiv_ID)[0];
                        current_obj.vimeo_player = $f(current_obj.vimeo_iframe);
                        
                        // When the player is ready, add listeners for pause, finish, and playProgress
                        current_obj.vimeo_player.addEvent('ready', function() {
                            current_obj.vimeo_player.api('setVolume', options.initialVolume);
                            if (total_images==1 && options.loop) {
                                current_obj.vimeo_player.api('setLoop',true);
                            }
                            //alert('ready');
                            //alert ($('#'+universal_video_background_vimeoDiv_ID).attr('src'));
                            /*if (current_obj.is_very_first) {
                                current_obj.vimeo_player.api('setVolume', options.initialVolume);
                                current_obj.is_very_first=false;
                            }*/
                            $('.lbg_vimeo_player',universal_video_background_container).css({   
                                  'z-index':0
                            });/**/             
                            if (options.autoPlayFirstVideo) {
                                if ($(imgs[current_obj.current_img_no]).attr('data-vimeo')!=undefined  && $(imgs[current_obj.current_img_no]).attr('data-vimeo')!='') {
                                    if (val.indexOf("ipad") != -1 || val.indexOf("iphone") != -1 || val.indexOf("ipod") != -1 || val.indexOf("webos") != -1 || navigator.userAgent.indexOf('Android') != -1) {
                                        //nothing
                                    } else {
                                        current_obj.vimeo_player.api('play');
                                    }
                                }                           
                                /*if ($(imgs[current_obj.current_img_no]).attr('data-vimeo')!=undefined  && $(imgs[current_obj.current_img_no]).attr('data-vimeo')!='') {
                                    current_obj.vimeo_player.api('play');
                                }*/
                            } else {
                                current_obj.vimeo_player.api('pause');  
                            }
                            
                            current_obj.vimeo_player.addEvent('finish', onFinish);
                        }); 
                        
                        function onFinish(id) {
                            if (total_images==1 && options.loop) { //loop the unique video and not the playlist
                                //current_obj.vimeo_player.api('play');
                            } else {
                                universal_video_background_navigation(1,current_obj,options,total_images,thumbsHolder_Thumbs,universal_video_background_container,thumbsHolder_Thumb,universal_video_background_thumbsHolder,imgs,universal_video_background_vimeoDiv_ID,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav);
                            }
                        }
            }
            //set vimeo video end   
            
            
            //set selfhosted video end
            if (current_obj.haveSelfHosted) {
                var cur_showVideoControls='';
                if (options.showVideoControls) {
                  cur_showVideoControls=' controls="controls"';
                }
                var cur_autoPlay=''
                if (options.autoPlayFirstVideo) {
                  cur_autoPlay=' autoplay="autoplay"';
                }
                var html5_video_tag=$('<video id="'+current_obj.html5_video_id+'" class="html5-video-player" width="100%" height="100%" preload="auto"'+cur_showVideoControls+cur_autoPlay+'></video>');
                universal_video_background_container.append(html5_video_tag);
                $('#'+current_obj.html5_video_id).css({     
                    'z-index':-1,
                    'width':0,
                    'height':0,
                    /*'display':'none',*/
                    'position':'absolute',
                    'background':'#000000'
                });
                //set initial volume
                document.getElementById(current_obj.html5_video_id).volume=options.initialVolume;                   
                if ($(imgs[current_obj.current_img_no]).attr('data-selfhostedMP4')!=undefined && $(imgs[current_obj.current_img_no]).attr('data-selfhostedMP4')!='') {
                      document.getElementById(current_obj.html5_video_id).src=detectBrowserAndVideo(ver_ie,$(imgs[current_obj.current_img_no]),current_obj.html5_video_id);
                      document.getElementById(current_obj.html5_video_id).load();
                      $('#'+current_obj.html5_video_id).css({       
                          'z-index':0,
                          'width':'100%',
                          'height':'100%'/*,
                          'display':'block'
                          'width':0*/
                      });
                      if (options.autoPlayFirstVideo) {
                          document.getElementById(current_obj.html5_video_id).play();                   
                      }
    
                }

                //movie ended
                function endMovieHandler(e) {
                    if(!e) { e = window.event; }
                    // What you want to do after the event
                    //alert ("ended");
                    if (total_images==1 && options.loop) { //loop the unique video and not the playlist
                                document.getElementById(current_obj.html5_video_id).play();
                    } else {
                        universal_video_background_navigation(1,current_obj,options,total_images,thumbsHolder_Thumbs,universal_video_background_container,thumbsHolder_Thumb,universal_video_background_thumbsHolder,imgs,universal_video_background_vimeoDiv_ID,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav);
                    }
                }                   
                document.getElementById(current_obj.html5_video_id).addEventListener('ended',endMovieHandler,false);
                            
            }
            //set selfhosted video end
            

            if (options.width100Proc && options.height100Proc && options.setAsBg) {
                resizeVideoBg(current_obj,options,imgs,universal_video_background_container);
            } else {
                $('.lbg_player',universal_video_background_container).width(universal_video_background_container.width());
                $('.lbg_player',universal_video_background_container).height(universal_video_background_container.height());

                $('.lbg_vimeo_player',universal_video_background_container).width(universal_video_background_container.width());
                $('.lbg_vimeo_player',universal_video_background_container).height(universal_video_background_container.height());  
            }       

            
            
            
            if (current_obj.current_img_no>=options.numberOfThumbsPerScreen) {
                carouselScroll(0,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb,current_obj)
            }           
            

            
            //Get first image (using initialized above current_obj.current_img_no) and init first bg
            current_obj.currentImg = $(imgs[current_obj.current_img_no]);
            current_obj.current_imgInside=current_obj.currentImg.find('img:first');
            
            


            
            //tumbs nav
            //var thumbsHolder_Thumbs=$(".thumbsHolder_ThumbOFF");
            //var thumbsHolder_Thumbs=$('.thumbsHolder_ThumbOFF', universal_video_background_container);
            thumbsHolder_Thumbs.click(function() {
                    var currentBut=$(this);
                    var i=currentBut.attr('rel');
                    //deactivate previous 
                    //$(thumbsHolder_Thumbs[current_obj.current_img_no]).removeClass('thumbsHolder_ThumbON');
                    deactivatePlaylistRecord(options,current_obj,$(thumbsHolder_Thumbs[current_obj.current_img_no]));                   
                    hideThePlayer(current_obj,options,universal_video_background_container,universal_video_background_vimeoDiv_ID);
                    
                    current_obj.bottomNavClicked=true;                  
                    current_obj.current_img_no=i-1;
                    universal_video_background_navigation(1,current_obj,options,total_images,thumbsHolder_Thumbs,universal_video_background_container,thumbsHolder_Thumb,universal_video_background_thumbsHolder,imgs,universal_video_background_vimeoDiv_ID,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav);
                    //alert (i+'  --  '+current_obj.current_img_no+'  --  '+total_images);
            });
            
            thumbsHolder_Thumbs.mouseenter(function() {
                var currentBut=$(this);
                var i=currentBut.attr('rel');
                
                //currentBut.addClass('thumbsHolder_ThumbON');
                activatePlaylistRecord(options,current_obj,currentBut);     
            });
            
            thumbsHolder_Thumbs.mouseleave(function() {
                var currentBut=$(this);
                var i=currentBut.attr('rel');

                if (current_obj.current_img_no!=i) {
                    //currentBut.removeClass('thumbsHolder_ThumbON');
                    deactivatePlaylistRecord(options,current_obj,currentBut);                   
                }
            });     
            


            

            //show/hide bottom nav
            universal_video_background_container.mouseenter(function() {
                if (options.autoHideBottomNav && options.showBottomNav) {
                            if (options.thumbsWrapperMarginTop<0 && current_obj.isVideoPlaying) {
                                //nothing
                            } else {
                                if (options.showBottomNav) {
                                    universal_video_background_thumbsHolderWrapper.css({
                                        "display":"block"
                                    });                                 
                                    universal_video_background_thumbsHolderWrapper
                                    .stop()
                                    .animate({
                                        opacity:1
                                    }, 500, 'swing', function() {
                                     //complete
                                    });
                                }                               
                            }
                     }
            });
            
            universal_video_background_container.mouseleave(function() {
                if (options.autoHideBottomNav && options.showBottomNav) {
                        universal_video_background_thumbsHolderWrapper
                                    .stop()
                                    .animate({
                                        opacity:0
                                    }, 300, 'swing', function() {
                                     //complete
                                    });
                   }
            });

            
            
            /*//universal_video_background_container
            $('.lbg_player',universal_video_background_container).swipe({
              swipe:function(event, direction, distance, duration, fingerCount) {
                  alert (duration);
                    if (current_obj.currentImg.attr('data-selfhostedMP4')!=undefined && current_obj.currentImg.attr('data-selfhostedMP4')!='' && current_obj.haveSelfHosted) {
                        document.getElementById(current_obj.html5_video_id).volume=0;
                    }
                    hideThePlayer(current_obj,options,universal_video_background_container,universal_video_background_vimeoDiv_ID);
                    if (distance >=100) {         
                        if (direction=='left') {
                            universal_video_background_navigation(1,current_obj,options,total_images,thumbsHolder_Thumbs,universal_video_background_container,thumbsHolder_Thumb,universal_video_background_thumbsHolder,imgs,universal_video_background_vimeoDiv_ID,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav);
                            //alert ("You swiped1 " + direction +'  --- distance: '+distance );
                        } else {
                            universal_video_background_navigation(-1,current_obj,options,total_images,thumbsHolder_Thumbs,universal_video_background_container,thumbsHolder_Thumb,universal_video_background_thumbsHolder,imgs,universal_video_background_vimeoDiv_ID,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav);
                            //alert ("You swiped2 " + direction +'  --- distance: '+distance );
                        }
                    }
                //alert ("You swiped " + direction +'  --- distance: '+distance );
              }
            });*/
            
        

            activate_tooltip(options,imgs);                 


            var TO = false;
            var doResizeNow=true;
            $(window).resize(function() {
                var ver_ie=getInternetExplorerVersion();
                doResizeNow=true;
                /*if (navigator.userAgent.indexOf('Android') != -1) {
                    if (options.windowOrientationScreenSize0==0 && window.orientation==0)
                        options.windowOrientationScreenSize0=$(window).width();
                        
                    if (options.windowOrientationScreenSize90==0 && window.orientation==90)
                        options.windowOrientationScreenSize90=$(window).height();   
                        
                    if (options.windowOrientationScreenSize_90==0 && window.orientation==-90)
                        options.windowOrientationScreenSize_90=$(window).height();                      
                    
                    if (options.windowOrientationScreenSize0 && window.orientation==0 && $(window).width()>options.windowOrientationScreenSize0)    
                        doResizeNow=false;

                    if (options.windowOrientationScreenSize90 && window.orientation==90 && $(window).height()>options.windowOrientationScreenSize90)    
                        doResizeNow=false;
                        
                    if (options.windowOrientationScreenSize_90 && window.orientation==-90 && $(window).height()>options.windowOrientationScreenSize_90) 
                        doResizeNow=false;  
                        
                        
                    if (current_obj.windowWidth==0) {
                        doResizeNow=false;
                        current_obj.windowWidth=$(window).width();
                    }

                }*/
                if (ver_ie!=-1 && ver_ie==9 && current_obj.windowWidth==0)
                    doResizeNow=false;
                
                
                if (current_obj.windowWidth==$(window).width()) {
                    doResizeNow=false;
                    if (options.windowCurOrientation!=window.orientation && navigator.userAgent.indexOf('Android') != -1) {
                        options.windowCurOrientation=window.orientation;
                        doResizeNow=true;
                    }
                } else {
                    /*if (current_obj.windowWidth===0 && (val.indexOf("ipad") != -1 || val.indexOf("iphone") != -1 || val.indexOf("ipod") != -1 || val.indexOf("webos") != -1))
                        doResizeNow=false;*/
                    current_obj.windowWidth=$(window).width();
                }
                
                
                if (options.responsive && doResizeNow) {
                     if(TO !== false)
                        clearTimeout(TO);
                     
                    
                    
                     //activate_tooltip(options,imgs);  
                     
                     TO = setTimeout(function(){ doResize(current_obj,options,total_images,imgs,universal_video_background_the,bannerControls,universal_video_background_container,thumbsHolder_Thumbs,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,thumbsHolder_Thumb,bottomNavBut,universal_video_background_bottomNav,universal_video_background_thumbsHolderVisibleWrapper,universal_video_background_thumbsHolderWrapper,bottomNavWidth,universal_video_background_border) }, 300); //200 is time in miliseconds
                }
            }); 







            
            
            //carousel controllers
            universal_video_background_carouselLeftNav.click(function() {
                if (!current_obj.isCarouselScrolling) {
                    currentCarouselLeft=universal_video_background_thumbsHolder.css('left').substr(0,universal_video_background_thumbsHolder.css('left').lastIndexOf('px'));

                    if (currentCarouselLeft <0 ) 
                        carouselScroll(1,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb,current_obj);
                }
            });
            
            
            universal_video_background_carouselRightNav.click(function() {
                if (!current_obj.isCarouselScrolling) {
                    currentCarouselLeft=universal_video_background_thumbsHolder.css('left').substr(0,universal_video_background_thumbsHolder.css('left').lastIndexOf('px'));
                    if (Math.abs(currentCarouselLeft-current_obj.carouselStep)<((2*current_obj.thumbBorderWidth+thumbsHolder_Thumb.width())+current_obj.thumbMarginLeft)*total_images) 
                        carouselScroll(-1,universal_video_background_thumbsHolder,universal_video_background_carouselLeftNav,universal_video_background_carouselRightNav,options,total_images,thumbsHolder_Thumb,current_obj);
                }
            });


            

            //first start
            //$(thumbsHolder_Thumbs[current_obj.current_img_no]).addClass('thumbsHolder_ThumbON');
            //////activatePlaylistRecord(options,current_obj,$(thumbsHolder_Thumbs[current_obj.current_img_no]));
    
            
            
        });
    };

    
    //
    // plugin skins
    //
    $.fn.universal_video_background.defaults = {
            skin: 'thumbs',
            width:960,
            height:540,
            width100Proc:false,
            height100Proc:false,                
            randomizeVideos: false,
            firstImg:0,
            initialVolume:1,
            loop:true,
            setAsBg:false,
            texturePath:'',         
            
            borderWidth: 0,
            borderColor: '#FFFFFF',
            absUrl:'',

            responsive:false,
            responsiveRelativeToBrowser:true,
            
            numberOfThumbsPerScreen:0,
            
            bottomNavPos:'center', //left/center/right
            bottomNavLateralMargin:0, //only for left & right
            thumbsWrapperMinHeight:25,
            thumbsWrapperMarginTop:-85,
            thumbsWrapperTopPadding:10,
            thumbsWrapperBottomPadding:10,
            thumbsWrapperBg:'transparent', //hexa or image
            thumbsBorderColorON:'#000000',
            thumbsBorderColorOFF:'#7a7a7a', 
            thumbsBgOffColor:'#000000',
            thumbsBgOffImgOpacity:100,
            thumbsBgOnColor:'#cc181e',
            thumbsBgOnImgOpacity:100,           

            showBottomNav:true,
            showOnInitBottomNav:true, // o2
            autoHideBottomNav:false, // o2
            
            showVideoControls:true,// not for vimeo
            suggestedQuality:'default', // ONLY for YouTube https://developers.google.com/youtube/iframe_api_reference#setPlaybackQuality
                    
            
            
            //showPreviewImage:false,
            autoPlayFirstVideo:true,
            showTooltip:false,


            
            youtubeJsUrl:'https://www.youtube.com/iframe_api',
            vimeoJsUrl:'http://a.vimeocdn.com/js/froogaloop2.min.js',
            
            videoProportionWidth:16,
            videoProportionHeight:9, // not available as option. Is a constant
                
            /*thumbsOnMarginTop:0,
            thumbsWrapperMarginTop:0,*/
            origWidth:0,
            origHeight:0,
            origThumbW:0,
            origThumbH:0,
            
            origThumbImgW:110,
            origThumbImgH:65,
            origthumbLeftPadding:0,
            origthumbRightPadding:0,
            origthumbTopPadding:0,
            origthumbBottomPadding:0,
            origthumbTitleFont:0,
            origthumbRegFont:0,
            origthumbTitleLineHeight:0,
            origthumbRegLineHeight:0,
            
            origthumbsHolder_MarginTop:0,
            windowOrientationScreenSize0:0,
            windowOrientationScreenSize90:0,
            windowOrientationScreenSize_90:0,
            windowCurOrientation:0          
    };
    


})(jQuery);





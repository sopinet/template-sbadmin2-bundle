<?php

namespace Sopinet\Template\Sbadmin2Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('SopinetTemplateSbadmin2Bundle:Default:index.html.twig', array('name' => $name));
    }
}

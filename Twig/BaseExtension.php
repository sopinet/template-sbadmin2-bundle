<?php

namespace Sopinet\Template\Sbadmin2Bundle\Twig;

use Symfony\Component\Locale\Locale;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Form\Extension\Core\DataTransformer\DateTimeToStringTransformer;

/**
 * Twig Extension - SopinetTemplateSbadmin2Bundle
 * Has a dependency to the apache intl module
 */
class BaseExtension extends \Twig_Extension implements ContainerAwareInterface
{
    /**
     * @var \Symfony\Component\DependencyInjection\ContainerInterface
     */
    private $container;

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }   

    /**
     * Class constructor
     *
     * @param \Symfony\Component\DependencyInjection\ContainerInterface $container the service container
     */
    public function __construct($container)
    {
        $this->container = $container;
    }
    
    public function getFilters()
    {
        return array(
        	'getRandomText' => new \Twig_Filter_Method($this, 'getRandomTextFilter')
        );
    }
	
	/**
	 * Devuelve un texto aleatorio
	 * @return String text
	 */
	public function getRandomTextFilter($limit) {
		$i = rand(1, $limit);
		return $this->container->get('translator')->trans("Random.text_".$i);
	}
	   
    public function getName()
    {
        return 'SopinetTemplateSbadmin2_extension';
    }
}
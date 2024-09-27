<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240926234713 extends AbstractMigration
{
    public function getDescription(): string
    {
        return "";
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ficha (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, genre VARCHAR(20) NOT NULL, history VARCHAR(255) NOT NULL, age INTEGER NOT NULL, height DOUBLE PRECISION NOT NULL, strength INTEGER NOT NULL, intelligence INTEGER NOT NULL, resistence INTEGER NOT NULL, charisma INTEGER NOT NULL, reflexes INTEGER NOT NULL, dexterity INTEGER NOT NULL, hit_point INTEGER NOT NULL, fury INTEGER NOT NULL, magic INTEGER NOT NULL, faith INTEGER NOT NULL, stamina INTEGER NOT NULL, bleeding BOOLEAN NOT NULL, poisoning BOOLEAN NOT NULL, inventory CLOB NULL --(DC2Type:json)
        )');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql("DROP TABLE ficha");
    }
}

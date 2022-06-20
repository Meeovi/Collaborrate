using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TrafficData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Impressions = table.Column<int>(nullable: false),
                    Clicks = table.Column<int>(nullable: false),
                    Position = table.Column<int>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrafficData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Avatar = table.Column<string>(nullable: true),
                    RoleId = table.Column<int>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "CreatedAt", "Name" },
                values: new object[,]
                {
                    { 1, new DateTime(2020, 11, 4, 11, 36, 47, 54, DateTimeKind.Utc).AddTicks(8832), "User" },
                    { 2, new DateTime(2020, 11, 4, 11, 36, 47, 54, DateTimeKind.Utc).AddTicks(9517), "Admin" }
                });

            migrationBuilder.InsertData(
                table: "TrafficData",
                columns: new[] { "Id", "Clicks", "CreatedAt", "Impressions", "Position" },
                values: new object[,]
                {
                    { 1, 19, new DateTime(2020, 11, 3, 0, 0, 0, 0, DateTimeKind.Local), 257, 47 },
                    { 2, 32, new DateTime(2020, 11, 2, 0, 0, 0, 0, DateTimeKind.Local), 260, 41 },
                    { 3, 77, new DateTime(2020, 11, 1, 0, 0, 0, 0, DateTimeKind.Local), 530, 18 },
                    { 4, 87, new DateTime(2020, 10, 31, 0, 0, 0, 0, DateTimeKind.Local), 254, 47 },
                    { 5, 44, new DateTime(2020, 10, 30, 0, 0, 0, 0, DateTimeKind.Local), 329, 42 }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Avatar", "CreatedAt", "Email", "Name", "Password", "RoleId" },
                values: new object[] { 2, "https://mdbootstrap.com/img/new/avatars/2.jpg", new DateTime(2020, 11, 4, 11, 36, 47, 69, DateTimeKind.Utc).AddTicks(8030), "user@mdbootstrap.com", "User", "10000.g4XaeJLRMkRu6+vyRb6W9Q==.r6jVCqWD4XN8wzIiHENkZsWNvDt11fE3MZOv92E/PNY=", 1 });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Avatar", "CreatedAt", "Email", "Name", "Password", "RoleId" },
                values: new object[] { 1, "https://mdbootstrap.com/img/new/avatars/2.jpg", new DateTime(2020, 11, 4, 11, 36, 47, 56, DateTimeKind.Utc).AddTicks(1534), "admin@mdbootstrap.com", "Admin", "10000.5GWwnkVL9+k4wxL7SGjQnA==.7Nr8Zf7AIzNTdxfb2D0Q6EAOZ7wtBRxbQ7qtvaRUrbk=", 2 });

            migrationBuilder.CreateIndex(
                name: "IX_Users_RoleId",
                table: "Users",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrafficData");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}

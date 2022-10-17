"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DigiboardMaxAggregate = class DigiboardMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DigiboardMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardMaxAggregate.prototype, "board", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DigiboardMaxAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardMaxAggregate.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardMaxAggregate.prototype, "course", void 0);
DigiboardMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DigiboardMaxAggregate", {
        isAbstract: true
    })
], DigiboardMaxAggregate);
exports.DigiboardMaxAggregate = DigiboardMaxAggregate;

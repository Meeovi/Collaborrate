"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DigiboardMinAggregate = class DigiboardMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DigiboardMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardMinAggregate.prototype, "board", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DigiboardMinAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardMinAggregate.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardMinAggregate.prototype, "course", void 0);
DigiboardMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DigiboardMinAggregate", {
        isAbstract: true
    })
], DigiboardMinAggregate);
exports.DigiboardMinAggregate = DigiboardMinAggregate;

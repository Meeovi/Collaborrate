"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DigiboardCreateInput = class DigiboardCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardCreateInput.prototype, "board", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DigiboardCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardCreateInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardCreateInput.prototype, "course", void 0);
DigiboardCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DigiboardCreateInput", {
        isAbstract: true
    })
], DigiboardCreateInput);
exports.DigiboardCreateInput = DigiboardCreateInput;

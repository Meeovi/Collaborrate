"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StatesCreateManyInput = class StatesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatesCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatesCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesCreateManyInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesCreateManyInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesCreateManyInput.prototype, "trainings", void 0);
StatesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatesCreateManyInput", {
        isAbstract: true
    })
], StatesCreateManyInput);
exports.StatesCreateManyInput = StatesCreateManyInput;

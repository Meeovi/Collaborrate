"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CitiesCreateManyInput = class CitiesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CitiesCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CitiesCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesCreateManyInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesCreateManyInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesCreateManyInput.prototype, "postalCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesCreateManyInput.prototype, "image", void 0);
CitiesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CitiesCreateManyInput", {
        isAbstract: true
    })
], CitiesCreateManyInput);
exports.CitiesCreateManyInput = CitiesCreateManyInput;

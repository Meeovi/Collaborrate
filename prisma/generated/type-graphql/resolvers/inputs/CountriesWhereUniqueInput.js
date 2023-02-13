"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CountriesWhereUniqueInput = class CountriesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CountriesWhereUniqueInput.prototype, "id", void 0);
CountriesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountriesWhereUniqueInput", {
        isAbstract: true
    })
], CountriesWhereUniqueInput);
exports.CountriesWhereUniqueInput = CountriesWhereUniqueInput;

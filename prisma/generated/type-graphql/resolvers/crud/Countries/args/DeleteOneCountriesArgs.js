"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCountriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesWhereUniqueInput_1 = require("../../../inputs/CountriesWhereUniqueInput");
let DeleteOneCountriesArgs = class DeleteOneCountriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesWhereUniqueInput_1.CountriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountriesWhereUniqueInput_1.CountriesWhereUniqueInput)
], DeleteOneCountriesArgs.prototype, "where", void 0);
DeleteOneCountriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCountriesArgs);
exports.DeleteOneCountriesArgs = DeleteOneCountriesArgs;

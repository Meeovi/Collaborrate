"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCountriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesWhereInput_1 = require("../../../inputs/CountriesWhereInput");
let DeleteManyCountriesArgs = class DeleteManyCountriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesWhereInput_1.CountriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesWhereInput_1.CountriesWhereInput)
], DeleteManyCountriesArgs.prototype, "where", void 0);
DeleteManyCountriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCountriesArgs);
exports.DeleteManyCountriesArgs = DeleteManyCountriesArgs;

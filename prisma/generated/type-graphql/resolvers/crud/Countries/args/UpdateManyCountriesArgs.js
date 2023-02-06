"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCountriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesUpdateManyMutationInput_1 = require("../../../inputs/CountriesUpdateManyMutationInput");
const CountriesWhereInput_1 = require("../../../inputs/CountriesWhereInput");
let UpdateManyCountriesArgs = class UpdateManyCountriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesUpdateManyMutationInput_1.CountriesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountriesUpdateManyMutationInput_1.CountriesUpdateManyMutationInput)
], UpdateManyCountriesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesWhereInput_1.CountriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesWhereInput_1.CountriesWhereInput)
], UpdateManyCountriesArgs.prototype, "where", void 0);
UpdateManyCountriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCountriesArgs);
exports.UpdateManyCountriesArgs = UpdateManyCountriesArgs;

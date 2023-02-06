"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCountriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesUpdateInput_1 = require("../../../inputs/CountriesUpdateInput");
const CountriesWhereUniqueInput_1 = require("../../../inputs/CountriesWhereUniqueInput");
let UpdateOneCountriesArgs = class UpdateOneCountriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesUpdateInput_1.CountriesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountriesUpdateInput_1.CountriesUpdateInput)
], UpdateOneCountriesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesWhereUniqueInput_1.CountriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountriesWhereUniqueInput_1.CountriesWhereUniqueInput)
], UpdateOneCountriesArgs.prototype, "where", void 0);
UpdateOneCountriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCountriesArgs);
exports.UpdateOneCountriesArgs = UpdateOneCountriesArgs;

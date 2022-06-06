"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCountriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesCreateInput_1 = require("../../../inputs/CountriesCreateInput");
let CreateCountriesArgs = class CreateCountriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesCreateInput_1.CountriesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountriesCreateInput_1.CountriesCreateInput)
], CreateCountriesArgs.prototype, "data", void 0);
CreateCountriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCountriesArgs);
exports.CreateCountriesArgs = CreateCountriesArgs;

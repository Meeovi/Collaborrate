"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCountriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesCreateManyInput_1 = require("../../../inputs/CountriesCreateManyInput");
let CreateManyCountriesArgs = class CreateManyCountriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountriesCreateManyInput_1.CountriesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCountriesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCountriesArgs.prototype, "skipDuplicates", void 0);
CreateManyCountriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCountriesArgs);
exports.CreateManyCountriesArgs = CreateManyCountriesArgs;

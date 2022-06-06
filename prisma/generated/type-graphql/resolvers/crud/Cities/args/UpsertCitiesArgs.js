"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesCreateInput_1 = require("../../../inputs/CitiesCreateInput");
const CitiesUpdateInput_1 = require("../../../inputs/CitiesUpdateInput");
const CitiesWhereUniqueInput_1 = require("../../../inputs/CitiesWhereUniqueInput");
let UpsertCitiesArgs = class UpsertCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereUniqueInput_1.CitiesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesWhereUniqueInput_1.CitiesWhereUniqueInput)
], UpsertCitiesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesCreateInput_1.CitiesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesCreateInput_1.CitiesCreateInput)
], UpsertCitiesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesUpdateInput_1.CitiesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesUpdateInput_1.CitiesUpdateInput)
], UpsertCitiesArgs.prototype, "update", void 0);
UpsertCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCitiesArgs);
exports.UpsertCitiesArgs = UpsertCitiesArgs;

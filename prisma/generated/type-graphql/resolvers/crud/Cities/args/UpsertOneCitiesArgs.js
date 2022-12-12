"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesCreateInput_1 = require("../../../inputs/CitiesCreateInput");
const CitiesUpdateInput_1 = require("../../../inputs/CitiesUpdateInput");
const CitiesWhereUniqueInput_1 = require("../../../inputs/CitiesWhereUniqueInput");
let UpsertOneCitiesArgs = class UpsertOneCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereUniqueInput_1.CitiesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesWhereUniqueInput_1.CitiesWhereUniqueInput)
], UpsertOneCitiesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesCreateInput_1.CitiesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesCreateInput_1.CitiesCreateInput)
], UpsertOneCitiesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesUpdateInput_1.CitiesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesUpdateInput_1.CitiesUpdateInput)
], UpsertOneCitiesArgs.prototype, "update", void 0);
UpsertOneCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCitiesArgs);
exports.UpsertOneCitiesArgs = UpsertOneCitiesArgs;

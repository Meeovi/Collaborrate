"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesCreateInput_1 = require("../../../inputs/StatesCreateInput");
const StatesUpdateInput_1 = require("../../../inputs/StatesUpdateInput");
const StatesWhereUniqueInput_1 = require("../../../inputs/StatesWhereUniqueInput");
let UpsertOneStatesArgs = class UpsertOneStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereUniqueInput_1.StatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatesWhereUniqueInput_1.StatesWhereUniqueInput)
], UpsertOneStatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesCreateInput_1.StatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatesCreateInput_1.StatesCreateInput)
], UpsertOneStatesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesUpdateInput_1.StatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatesUpdateInput_1.StatesUpdateInput)
], UpsertOneStatesArgs.prototype, "update", void 0);
UpsertOneStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneStatesArgs);
exports.UpsertOneStatesArgs = UpsertOneStatesArgs;

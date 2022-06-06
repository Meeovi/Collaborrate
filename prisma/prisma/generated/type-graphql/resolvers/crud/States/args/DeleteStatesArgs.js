"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesWhereUniqueInput_1 = require("../../../inputs/StatesWhereUniqueInput");
let DeleteStatesArgs = class DeleteStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereUniqueInput_1.StatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatesWhereUniqueInput_1.StatesWhereUniqueInput)
], DeleteStatesArgs.prototype, "where", void 0);
DeleteStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteStatesArgs);
exports.DeleteStatesArgs = DeleteStatesArgs;

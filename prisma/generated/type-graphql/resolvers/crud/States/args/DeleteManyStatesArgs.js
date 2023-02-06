"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesWhereInput_1 = require("../../../inputs/StatesWhereInput");
let DeleteManyStatesArgs = class DeleteManyStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereInput_1.StatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesWhereInput_1.StatesWhereInput)
], DeleteManyStatesArgs.prototype, "where", void 0);
DeleteManyStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyStatesArgs);
exports.DeleteManyStatesArgs = DeleteManyStatesArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesUpdateManyMutationInput_1 = require("../../../inputs/StatesUpdateManyMutationInput");
const StatesWhereInput_1 = require("../../../inputs/StatesWhereInput");
let UpdateManyStatesArgs = class UpdateManyStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesUpdateManyMutationInput_1.StatesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatesUpdateManyMutationInput_1.StatesUpdateManyMutationInput)
], UpdateManyStatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereInput_1.StatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesWhereInput_1.StatesWhereInput)
], UpdateManyStatesArgs.prototype, "where", void 0);
UpdateManyStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyStatesArgs);
exports.UpdateManyStatesArgs = UpdateManyStatesArgs;

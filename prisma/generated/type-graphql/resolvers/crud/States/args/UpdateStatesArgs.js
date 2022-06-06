"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesUpdateInput_1 = require("../../../inputs/StatesUpdateInput");
const StatesWhereUniqueInput_1 = require("../../../inputs/StatesWhereUniqueInput");
let UpdateStatesArgs = class UpdateStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesUpdateInput_1.StatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatesUpdateInput_1.StatesUpdateInput)
], UpdateStatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereUniqueInput_1.StatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatesWhereUniqueInput_1.StatesWhereUniqueInput)
], UpdateStatesArgs.prototype, "where", void 0);
UpdateStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateStatesArgs);
exports.UpdateStatesArgs = UpdateStatesArgs;

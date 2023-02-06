"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesCreateManyInput_1 = require("../../../inputs/StatesCreateManyInput");
let CreateManyStatesArgs = class CreateManyStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatesCreateManyInput_1.StatesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyStatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyStatesArgs.prototype, "skipDuplicates", void 0);
CreateManyStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyStatesArgs);
exports.CreateManyStatesArgs = CreateManyStatesArgs;

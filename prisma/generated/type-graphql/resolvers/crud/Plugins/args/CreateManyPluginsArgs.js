"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsCreateManyInput_1 = require("../../../inputs/PluginsCreateManyInput");
let CreateManyPluginsArgs = class CreateManyPluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PluginsCreateManyInput_1.PluginsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPluginsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPluginsArgs.prototype, "skipDuplicates", void 0);
CreateManyPluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPluginsArgs);
exports.CreateManyPluginsArgs = CreateManyPluginsArgs;

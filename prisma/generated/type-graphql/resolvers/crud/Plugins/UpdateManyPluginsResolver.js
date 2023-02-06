"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPluginsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyPluginsArgs_1 = require("./args/UpdateManyPluginsArgs");
const Plugins_1 = require("../../../models/Plugins");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyPluginsResolver = class UpdateManyPluginsResolver {
    async updateManyPlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPluginsArgs_1.UpdateManyPluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyPluginsResolver.prototype, "updateManyPlugins", null);
UpdateManyPluginsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Plugins_1.Plugins)
], UpdateManyPluginsResolver);
exports.UpdateManyPluginsResolver = UpdateManyPluginsResolver;
